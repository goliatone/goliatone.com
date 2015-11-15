---
title: "Python Running Multiple Environments"
date: 2015-05-9
template: "post.hbs"
---




pip install virtualenv
virtualenv myapp
cd myapp
source bin/activate


```
$ brew install python3
```

which python3





/usr/local/bin/python3


virtualenv -p /usr/local/bin/python3



openssl s_client -connect 192.168.0.1:443 -CAfile `python -c 'import requests; print(requests.certs.where())'`


Content-Type application/json
https://192.168.0.1/auth/login
psw: 0000


[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:600)

/Users/YOUR_USER_NAME/Music/iTunes/iTunes Media/Mobile Applications

//From v360 iphone binary
sec policy create basic x509
sec_policy_create_basic_x509
sec trust copy public key


https://amaral.northwestern.edu/resources/guides/pyenv-tutorial

##PYENV
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi

To enable shims and autocompletion add to your profile:
  if which pyenv > /dev/null; then eval "$(pyenv init -)"; fi

To use Homebrew's directories rather than ~/.pyenv add to your profile:
  export PYENV_ROOT=/usr/local/opt/pyenv