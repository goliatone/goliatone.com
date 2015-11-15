---
title: "Raspberry Pi Init D Script Node App"
date: 2015-04-2
template: "post.hbs"
---


Once you have developed an app that you want to run on your Raspberry Pi you need to find a way to have it running on the background and possibly to start on boot.

There are different ways to go about it, but a simple and effective one is to use `init.d`. You effectively create a **deamon** that will be running your app in the background and gives you a nice interface to `start|stop|restart` your service.

To start, you can use the sample **skeleton** script distributed with the OS, which you can find at:
```
$ cat /etc/init.d/skeleton
```

This script is a template that puts you almost all the way there. However, there are a few things that you might need to be aware of in order to run a **node** app.

One issue you might face is since you might have to run the script as **sudo** user then the **node** binary might not be available- I installed **node** with the **pi** user.

## Using the script

```
chmod 755 bin/ledcontroller.sh
```

```
sudo cp bin/ledcontroller.sh /etc/init.d/ledcontroller
```

```
sudo update-rc.d ledcontroller defaults
```

```
ls -l /etc/rc?.d/*ledcontroller
```

## Script
```bash
#!/bin/sh
### BEGIN INIT INFO
# Provides:          ledcontroller
# Required-Start:    $network $syslog
# Required-Stop:     $network $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: ledcontroller
# Description:       ledcontroller
### END INIT INFO
# PATH should only include /usr/* if it runs after the mountnfs.sh script
# usr/local/bin/node
PATH=/sbin:/usr/sbin:/bin:/usr/bin
DESC=ledcontroller
NAME=ledcontroller

APP_ROOT=/home/pi/CODE/ledserver/bin
APP_GROUP=pi
APP_USER=pi
DAEMON=/usr/local/bin/node
DAEMON_ARGS="ledcontroller"

PIDFILE=/var/run/$NAME.pid
SCRIPTNAME=/etc/init.d/$NAME
export NODE_ENV={{env}}

# Exit if the package is not installed
[ -x "$DAEMON" ] || exit 0

# Read configuration variable file if it is present
[ -r /etc/default/$NAME ] && . /etc/default/$NAME

# Load the VERBOSE setting and other rcS variables
. /lib/init/vars.sh
# I like to know what is going on
VERBOSE=yes

# Define LSB log_* functions.
# Depend on lsb-base (>= 3.2-14) to ensure that this file is present
# and status_of_proc is working.
. /lib/lsb/init-functions

#
# Function that starts the daemon/service
#
do_start()
{
    # Return
    #   0 if daemon has been started
    #   1 if daemon was already running
    #   2 if daemon could not be started
    start-stop-daemon --start --quiet \
        --chuid $APP_USER:$APP_GROUP --chdir $APP_ROOT --background \
        --pidfile $PIDFILE --exec $DAEMON --test > /dev/null \
        || return 1
    start-stop-daemon --start --quiet \
        --chuid $APP_USER:$APP_GROUP --chdir $APP_ROOT --background \
        --make-pidfile --pidfile $PIDFILE --exec $DAEMON -- $DAEMON_ARGS \
        || return 2
    # Add code here, if necessary, that waits for the process to be ready
    # to handle requests from services started subsequently which depend
    # on this one.  As a last resort, sleep for some time.
}

#
# Function that stops the daemon/service
#
do_stop()
{
    # Return
    #   0 if daemon has been stopped
    #   1 if daemon was already stopped
    #   2 if daemon could not be stopped
    #   other if a failure occurred
    start-stop-daemon --stop --quiet --retry=TERM/30/KILL/5 \
        --pidfile $PIDFILE --exec $DAEMON
    RETVAL="$?"
    [ "$RETVAL" = 2 ] && return 2
    # Many daemons don't delete their pidfiles when they exit.
    rm -f $PIDFILE
    return "$RETVAL"
}

#
# Function that sends a SIGHUP to the daemon/service
#
do_reload() {
    #
    # If the daemon can reload its configuration without
    # restarting (for example, when it is sent a SIGHUP),
    # then implement that here.
    #
    start-stop-daemon --stop --signal 1 --quiet --pidfile $PIDFILE \
        --exec $DAEMON
    return 0
}

case "$1" in
  start)
    [ "$VERBOSE" != no ] && log_daemon_msg "Starting $DESC" "$NAME"
    do_start
    case "$?" in
        0|1) [ "$VERBOSE" != no ] && log_end_msg 0 ;;
        2) [ "$VERBOSE" != no ] && log_end_msg 1 ;;
    esac
    ;;
  stop)
    [ "$VERBOSE" != no ] && log_daemon_msg "Stopping $DESC" "$NAME"
    do_stop
    case "$?" in
        0|1) [ "$VERBOSE" != no ] && log_end_msg 0 ;;
        2) [ "$VERBOSE" != no ] && log_end_msg 1 ;;
    esac
    ;;
  status)
    status_of_proc "$DAEMON" "$NAME" && exit 0 || exit $?
    ;;
  reload|force-reload)
    log_daemon_msg "Reloading $DESC" "$NAME"
    do_reload
    log_end_msg $?
    ;;
  restart|force-reload)
    log_daemon_msg "Restarting $DESC" "$NAME"
    do_stop
    case "$?" in
      0|1)
        do_start
        case "$?" in
            0) log_end_msg 0 ;;
            1) log_end_msg 1 ;; # Old process is still running
            *) log_end_msg 1 ;; # Failed to start
        esac
        ;;
      *)
        # Failed to stop
        log_end_msg 1
        ;;
    esac
    ;;
  *)
    echo "Usage: $SCRIPTNAME {start|stop|status|restart|force-reload}" >&2
    exit 3
    ;;
esac
:
```


<!--
http://blog.scphillips.com/2013/07/getting-a-python-script-to-run-in-the-background-as-a-service-on-boot/
http://blog.lanyonm.org/articles/2015/01/11/raspberry-pi-init-script-python.html
-->