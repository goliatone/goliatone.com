---
title: "CSS: Gradient borders"
date: 2012-02-08
---


Just a quick snippet to make linear gradient borders.

    .gradient-borders { 
        border-top: 1px solid #000;
       
        background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#000), to(transparent));
        background-image: 
            -webkit-linear-gradient(#000, transparent),
            -webkit-linear-gradient(#000, transparent);
        background-image:
            -moz-linear-gradient(#000, transparent),
            -moz-linear-gradient(#000, transparent)
        ;
        background-image:
            -o-linear-gradient(#000, transparent),
            -o-linear-gradient(#000, transparent)
        ;
        background-image: 
            linear-gradient(#000, transparent),
            linear-gradient(#000, transparent)
        ;
        -moz-background-size:1px 100%;
        background-size:1px 100%;
        background-position:0 0, 100% 0;
        background-repeat:no-repeat;
    }