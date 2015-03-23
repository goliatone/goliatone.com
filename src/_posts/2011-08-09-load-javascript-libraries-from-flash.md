---
title: "Load JavaScript libraries from Flash"
date: 2011-08-09
description: "Flash talks to jQuery."
---
If we have the need to load a javascript library from our flash application, we can use this class.

We can use this `JSLibraryLoader` as an example of what we can do if we build on top of a simple class taking care of one specific concern. We are going to build on top of the StringTemplate class introduced in a [previous note](http://www.goliaotne.com/2011/08/06/as3-stringtemplate-class/).

    package com.skinnygeek.js.libraries {
	import com.skinnygeek.js.JS;
	import com.skinnygeek.logging.Logger;
	import com.skinnygeek.media.text.StringTemplate;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.external.ExternalInterface;
	


	/**
	 * <code>JSLibraryLoader</code> is an utility to load external js libraries
	 * and include them in the dom after the SWF file has been loaded...
	 *
	 *	@langversion ActionScript 3.0
	 *	@Flash 		 Player 9.0.28.0
	 *	@author 	 Emiliano Burgos
	 *	@url		 http://www.enjoy-mondays.com
	 *  @version 	 1.0
	 */
	public class JSLibraryLoader extends EventDispatcher {
		
		private static const SCRIPT	:String = 
		(<script>
			<![CDATA[
				var head = document.getElementsByTagName('head')[0];
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = '{url}';
				script.onreadystatechange = function () {
					if (this.readyState == 'complete') _onLoaded();
				}
				script.onload = _onLoaded;
				head.appendChild(script);				
			]]></script>).toString();
												
		private static const CALLBACK	:String = 
		(<script>
			<![CDATA[				
				function _onLoaded() {
					__movie("{objectId}").jsLoadedCallback();
				}				
				function __movie(movieName) {
					if (navigator.appName.indexOf("Microsoft") != -1) {
						return window[movieName];
					} else {
						return document[movieName];
					}
				}
			]]></script>).toString();
												
		public static const JQUERY			:String = "http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js";
		
		/** @private **/
		private var _template				:StringTemplate;
		
		private var _callback				:StringTemplate;
		
		/** @private **/
		private var _logger					:Logger = Logger.instance( JSLibraryLoader );
		
		/**
		 * <code>JSLibraryLoader</code>
		 * com.skinnygeek.js.libraries.JSLibraryLoader
		 */
		public function JSLibraryLoader() {
			reset( );
		}
		
		/**
		 *
		 */
		public function reset():void {
			
			if ( !ExternalInterface.available ) return;
			
			_template = new StringTemplate;
			_template.template = SCRIPT;
			
			_callback = new StringTemplate;
			_callback.template = CALLBACK;
			_callback.set("objectId", ExternalInterface.objectID );
			ExternalInterface.call( "eval", _callback.execute() );
			
			_logger.warn("WE ARE SETTING JS script", _callback.execute() );
			
			ExternalInterface.addCallback("jsLoadedCallback", _jsLoadedCallback );
		}
		
		private function _jsLoadedCallback():void {
			dispatchEvent( new Event(Event.COMPLETE ) );
			//_logger.warn("WE HAVE CALLBACK!!");
		}
		
		/**
		 *
		 * @param	url
		 */
		public function load( url:String ):void {
			_template.set('url', url );
			
			var script:String = _template.execute( );
			
			script = script.replace("\n", "");
			_logger.warn("WE ARE LOADING JS LIBRARY: %0\n", url);
			
			if ( !ExternalInterface.available ) return;
			
			ExternalInterface.call("eval", script);
		}		
	}

    }