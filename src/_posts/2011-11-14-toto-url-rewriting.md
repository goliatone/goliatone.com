---
title: "Toto: URL Rewriting"
date: 2011-11-14
---

There is one entry on toto's github wiki which [explains][1] how to set up a redirect:

```ruby
    gem 'rack-rewrite', '~> 0.2.1'
    require 'rack-rewrite'
    if ENV['RACK_ENV'] == 'production'
      use Rack::Rewrite do
        r301 %r{.*}, 'http://yoursite.com$&', :if => Proc.new  do |rack_env|
          rack_env['SERVER_NAME'] != 'yoursite.com'
        end
      end
    end
```

If I include this on my config.ru the app crashes. Lookin at the logs, i can see something like:

>report_activate_error: RubyGem version error: rack-rewrite(1.2.1 not ~> 0.2.1) (Gem::LoadError)

The solution is quite simple actually. Just update the version in config.ru, like this:

```ruby
    gem 'rack-rewrite', '~> 1.2.1'
    require 'rack-rewrite'
    if ENV['RACK_ENV'] == 'production'
        use Rack::Rewrite do
            r301 %r{.*}, 'http://www.yoursite.com$&', :if => Proc.new {|rack_env|
            rack_env['SERVER_NAME'] != 'www.yoursite.com'
        }
        end
    end
```

Rewrite up and running.
One comment, I like the rewrites that go to www, so I modified the original script to do so.

**[Edit 15/11/2011]**
The previous script was giving some issues locally. Since I don't need to rewrite in my local server, just swapped one line to check the environment before requiring `rack-rewrite`. Makes sense.

```ruby
    # Redirect non-www to www
    if ENV['RACK_ENV'] == 'production' #Moved env. check here. 
    gem 'rack-rewrite', '~> 1.2.1'
    require 'rack-rewrite'
        use Rack::Rewrite do
            r301 %r{.*}, 'http://www.goliatone.com$&', :if => Proc.new {|rack_env|
            rack_env['SERVER_NAME'] != 'www.goliatone.com'
        }
        end
    end
```
  [1]: https://github.com/cloudhead/toto/wiki/URL-Rewriting