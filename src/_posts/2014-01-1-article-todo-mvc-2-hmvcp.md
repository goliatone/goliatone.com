---
title: "Article Todo Mvc 2 Hmvcp"
date: 2014-01-1
template: "post.hbs"
---

## TODO:
Rewrite the code in this article [mvc-with-js][] to refactor it and express a simpler way of doing things.

`MVC` is a design pattern that breaks an application in three layers:
- Model: Handling data (Model).
- View: Presentating data to the user.
- Controller: Reacting to user interaction.

Introduce conventions. A way to reduce boiler code. 
Introduce the path to an abstraction. How we go from the article to an implementation where we have an interface. The View provides two methods:

```javascript
View.prototype.listensTo = function(){
    return this.eventList;
};

View.prototype.onSystemEvent = function(event){
    var handler = 'on' + event.type.capitalize();
};
```

The `Proxy` - `ViewController`, `Mediator` or `Presenter` class listens for System wide events, and acts as a translation layer. That is easier to justify on larger systems.
In a small application, it could be as simple as a method on the `Application` level, that manages the wiring.
```javascript
Application.prototype.registerView = function(view){
    var events = view.listensTo();
    events.forEach(function(e, i, a){
        this.emmiter.on(e, view.onSystemevent.bind(view));
    }, this);
};
```



### A View's responsability

In this article, [a view's responsability][], the author introduces the idea of a view's responsability, gives us some compelings reasons why this is a good idea, and then lists the duties:

- Rendering the view, i.e. making changes to the DOM.
- Listening for DOM events, such as click and submit.
- ~~Listening for events from the rest of my application, plus triggering events when the view is in certain states.~~
- Creating sub-views if they are needed.
- ~~Updating models based on changes in the view (Don't you dare make $.ajax calls directly in views!)~~

I would argue that actually, the responsabilities are:
- Encapsulating a view component. Generally related to the DOM.
- Listening for user events. Usually DOM events.
- Relaying user events that affect application state.
- Updating the proxied component when external- to the view- events occur.

Views should wrap a UI *control*

Thats it. Maybe, the term View is confusing. I think of it as Content View.

If we break a view in subtypes, we can have- another- list:
1. Layout View
2. Theme View
3. Content View
I would say that 1,2 should be offhanded to the browser HTML/CSS. 


[a view's responsability]: (http://urli.st/450-JS-Resources/5v5-BEKK-Open)
[mvc-with-js]: (http://alexatnet.com/articles/model-view-controller-mvc-javascript)