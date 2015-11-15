---
title: "Python No Module Named"
date: 2013-09-6
template: "post.hbs"
---

> ImportError: No module named webapp.twiliohandler

deployment

try:
    from webapp.twiliohandler import TwilioHandler
except:
    #TODO: DevOps, fix deployment
    product = os.path.dirname(__file__)
    sys.path.append(product)
    from webapp.twiliohandler import TwilioHandler