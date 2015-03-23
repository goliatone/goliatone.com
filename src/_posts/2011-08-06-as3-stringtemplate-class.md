---
title: "AS3: StringTemplate class"
date: 2011-08-06
---
A _simple_ class can many times be a powerful tool to build more complex stuff on top.

By simple a mean that has few or one concern, and takes care of an initially uninteresting task. The StringTemplate might be an example of that.

What it does is quite simple, really. If you feed in a context and later you provide an object, it will resolve the objects attributes value that are present in the template. One example such make this more obvious:

```actionscript
    var template:String = "Hello {username}, welcome to {cityname}!";
    var data:Object = {username:"Goliatone", cityname:"New York" };
    var resolver:StringTemplate = new StringTemplate();
    resolver.template = template;
    trace( resolver.execute(data)) //Hello Goliatone, welcome to New York!
```

And the class would look like this:

```actionscript
    package  com.skinnygeek.media.text {
        import com.skinnygeek.utils.ObjectUtils;    
    
        /**
         * <code>StringTemplate</code>.
         *
         *  @langversion ActionScript 3.0
         *  @Flash       Player 9.0.28.0
         *  @author      Emiliano Burgos
         *  @url         http://www.enjoy-mondays.com
         *  @version     1.0
         */
        public class StringTemplate {
            
            /** @private **/
            private var _template                   :String;
            
            /** @private **/
            private var _data                       :Object;            
            
            /**
             * <code>StringTemplate</code>
             * com.skinnygeek.media.text.StringTemplate
             */
            public function StringTemplate() {
                reset( );
            }
            
            public function reset( ):void {
                _data = { };
                _template = null;
            }
            
            /**
             *
             * @param   key
             * @param   value
             */
            public function set( key:String, value:* ):void {
                _data[key] = value//.toString();
            }
            
            /**
             *
             * @param   key
             */
            public function unset(key:String):void {
                delete _data[key];
            }
            
            /**
             *
             * @param   data
             * @return
             */
            public function  execute( data:Object = null ):String {
                if ( data ) this.data = ObjectUtils.instance.merge( this.data, data );
                return parseTemplate( _template, this.data );
            }
            
            /**
             *
             */
            public function get data():Object { return _data; }
            /** @private **/
            public function set data(value:Object):void {
                _data = value;
            }
            
            /**
             * String template holding the markers to be replaced.
             */
            public function get template():String { return _template; }
            /** @private **/
            public function set template(value:String):void {
                _template = value;
            }
            
            /**
            * Simple string replacement.
            * <pre>
            *   var table : Object = { name : "lorem ipsum", date : "2010/11/23" };
            *   var template: String = "{name} - {date}";
            *
            *   trace(StringTemplate.parseTemplate(template, table)); // -> lorem ipsum - 2010/11/23
            * </pre>
            *
            * @param    template String to be parsed
            * @param    data Object containing Key -> Value pairs.
            * @return   Formated string
            *
            */
            static public function parseTemplate( template:String, data:Object): String {
                function replaceFn():String {
                    var prop:String = arguments[1];
                    return (prop in data) ? data[prop] : '';
                }
                return template.replace(/{(\w+)}/g, replaceFn);
            }
            
            
        }
    } 
```
