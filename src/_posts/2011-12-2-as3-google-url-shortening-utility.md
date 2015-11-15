---
title: "As3 Google Url Shortening Utility"
date: 2011-12-2
template: "post.hbs"
---

Recently I needed to use a URL shortening service. I decided to go with Google's goo.gl

I made a simple utility class to make use of the service. It will shorten any URL you or expand a previously shortened URL.
It also features a simple cache mechanism to save some time in case we keep working with the same URL's.
If you want to use the google API key, you would set it up like so:

`GoogleURLShortener.API_KEY = apiKey;`

A simple use case:

    GoogleURLShortener.instance.addEventListener(GoogleURLShortenerEvent.ERROR, _onResult);
    GoogleURLShortener.instance.addEventListener(GoogleURLShortenerEvent.EXPANDED, _onResult);
    GoogleURLShortener.instance.addEventListener(GoogleURLShortenerEvent.SHORTENED, _onResult);
    		
    GoogleURLShortener.instance.shorten("http://www.goliatone.com/2011/11/15/ie-page-renders-then-404/");

And to handle the result:

    private function _onResult(e:GoogleURLShortenerEvent):void {
    			switch(e.type) {
    				case GoogleURLShortenerEvent.SHORTENED:
    					trace("-------------------------------");
    					trace("WE HAVE SHORTENED URL");
    					trace("RESULT: ",e.result);
    					trace("-------------------------------");
    					GoogleURLShortener.instance.expand(e.result.id);
    				break;
    				case GoogleURLShortenerEvent.EXPANDED:
    					trace("-------------------------------");
    					trace("WE HAVE EXPANDED URL");
    					trace("RESULT: ",e.result);
    					trace("-------------------------------");
    				break;
    				case GoogleURLShortenerEvent.ERROR:
    					
    				break;
    			}
    		}

Which traces the following:
	-------------------------------
    WE HAVE SHORTENED URL
	[GoogleURLShortenerResult => id:http://goo.gl/xYmWd, longUrl:http://www.goliatone.com/2011/11/15/ie-page-renders-then-404/]
    -------------------------------
    -------------------------------
    WE HAVE EXPANDED URL
    [GoogleURLShortenerResult => id:http://goo.gl/xYmWd, longUrl:http://www.goliatone.com/2011/11/15/ie-page-renders-then-404/, status:OK]
	-------------------------------

