---
title: "Kohana Config, lesson learned"
date: 2011-09-24
description: "Hello Toto post"
---
The way you access configuration options in Kohana is through the `Kohana::config('config-file.parameter-name')` method and you screw the parameter name and request something that is undefined things go hire wire, nuts, crazy, loco. For real!

Connection will fail, and you will get no error messages what so ever.

One quick solution would be to use a class that would hold constants with the parameters names.

    class ModuleConfig {
         const PARAMETER_NAME = 'parameter-name';
    }
    
    $option = Kohana::config(ModuleConfig::PARAMETER_NAME);

