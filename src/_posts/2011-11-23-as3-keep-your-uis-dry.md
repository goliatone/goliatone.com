---
title: "AS3: Keep your UI's DRY"
date: 2011-11-23
---

Consider the following code snippet. Real world code, a form with multiple icons:
```actionscript
    //contactIconBtn
    var contactIconBtn:Sprite = _skin.getAssetAs("contactIconBtn", Sprite, null );
    _contactIconBtn = new OSIconButton(contactIconBtn);
    _contactIconBtn.addEventListener(InteractiveContainer.ON_CLICK, _hanldeButtons );
    		
    //whatIsIconBtn => window_info:
    var whatIsIconBtn:Sprite = _skin.getAssetAs("whatIsIconBtn", Sprite, null );
    _whatIsIconBtn = new OSIconButton(whatIsIconBtn);
    _whatIsIconBtn.addEventListener(InteractiveContainer.ON_CLICK, _hanldeButtons );
    			
    //twitterIconBtn
    var twitterIconBtn:Sprite = _skin.getAssetAs("twitterIconBtn", Sprite, null );
    _twitterIconBtn = new OSIconButton(twitterIconBtn);
    _twitterIconBtn.addEventListener(InteractiveContainer.ON_CLICK, _hanldeButtons );
    			
    //facebookIconBtn
    var facebookIconBtn:Sprite = _skin.getAssetAs("facebookIconBtn", Sprite, null );
    _facebookIconBtn = new OSIconButton(facebookIconBtn);
    _facebookIconBtn.addEventListener(InteractiveContainer.ON_CLICK, _hanldeButtons );
```

Ugly, how to keep it **DRY**? Let's first look at this other snippet, which is the same but refactored.

```actionscript
    var icons:Array = _skin.locateChildrenBySuffix(/(^.+)(IconBtn)/i, Sprite, -1);
    var btn:OSIconButton;
    for each( var skin:Sprite in icons ) {
    	btn = new OSIconButton(skin);
    	btn.addEventListener(InteractiveContainer.ON_CLICK, _hanldeButtons );
    	this["_" + skin.name] = btn;
    }
```

Much nicer, ain't it!

Now, for this to work we need to have in place some conventions. This is how I handle the buttons. Notice how there is a single method handling all buttons and discriminating by the button's name:

```actionscript
    private function _hanldeButtons(e:Event):void {
    	switch(e.target.name ) {
    		case _contactIconBtn.name:
    			_windowManager.openWindow( WindowContact.ID, false );
    		break;
    		case _whatIsIconBtn.name:
    			_windowManager.openWindow( WindowInfo.ID, false );
    		break;
    		case _facebookIconBtn.name:
    			var link:LinkVO = ModelList.instance.siteModel.getLink( "facebookUrl");
    			link.execute( );
    				break;
    		case _twitterIconBtn.name:
    			link = ModelList.instance.siteModel.getLink( "twitterUrl");
    			link.execute( );
    		break;
    	}
    }
```

The important method of `_skin:`

```actionscript
    /**
     * @inheritDoc
     */
    public function locateChildrenBySuffix(suffix:*, type:Class , index:int = 0 ):* {
    	var collection:Array = ContainerUtils.collect( _source, suffix );
    	if ( collection.length == 1 ) return collection[0] as type;
    	else if ( collection.length > 1 && index == -1 ) return collection;
    	else return collection[index] as type;
    }
```

The call to `ContainerUtils.collect( _source, suffix );` handles the actual gathering of items:

```actionscript
    /**
     * 
     * @param	container
     * @param	mask
     * @return
     */
    public static function collect( container:DisplayObjectContainer, mask:* ):Array {
    	
    	var reg:RegExp = mask is RegExp ? mask : new RegExp( mask );
    		
    	var n:int = container.numChildren;
    	var c:DisplayObject;
    	var id:String;
    	var childs:Array = [];
    	while (n-- > 0 ) {
    		c = container.getChildAt(n);
    		id = c.name;
    		if ( id.match( reg ) ) childs.push( c );
    	}
    
    	return childs;
    }
```