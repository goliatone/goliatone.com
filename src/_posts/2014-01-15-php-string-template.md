---
title: "Php String Template"
date: 2014-01-14
template: "post.hbs"
---

### PHP simple string template method

A rather simplistic function to interpolate strings and replace tokens by the values found in a provided context.

Consider the following example: 

```php
$context  = array(
    'name' => 'goliatone',
    'time' => function(){
        return date('Y-m-d H:i:s');
    }
);
$template = "Hola {name}! Time: {time}. {nothing}";

echo Message::interpolate($template, $context);
//Hola goliatone! Time: 14:12:26. {nothing}
echo Message::interpolate($template, $context, TRUE);
//Hola goliatone! Time: 14:12:26.
```



```php
<?php
 
class Message
{
    /**
     * @param  string $message String template
     * @param  array  $context Context providing vars
     * @param  bool   $consume If true, missing matches will be
     *                         removed, else they are left.
     * @return string
     */
    public static function interpolate($message, array $context = array(), $consume = FALSE)
    {
        $getMatchReplace = function($match, $context) use($consume){
            $alt = $consume ? "" : "{".$match."}";
            $out = array_key_exists($match, $context) ? $context[$match] : $alt;
            return is_callable($out) ? call_user_func($out, $match, $context) : $out;
        };
 
        $replace = array();
        preg_match_all('/\{([^}]+)}/', $message, $matches);
 
        foreach($matches[1] as $match) {
            $match = trim($match);
            $replace["{".$match."}"] = $getMatchReplace($match, $context);
        }
        //mb_strstr
        return strtr($message, $replace);
    }
}
```

