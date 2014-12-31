# fis-postprocessor-jswrapper

A postprocessor plugin for fis to wrap javascript with closure or amd define.



## settings

    $ vi path/to/project/fis-conf.js

```javascript
fis.config.merge({
    settings : {
        postprocessor : {
            jswrapper : {
                //wrap type. if omitted, it will wrap js file with '(function(){...})();'.
                type : 'amd',
                //you can use template also, ${content} means the file content
                //template : '!function(){${content}}();',
                //wrap all js file, default is false, wrap modular js file only.
                wrapAll : true
            }
        }
    }
});
```

或者通过 roadmap.path 局部配置

```
fis.config.set('roadmap.path', [
    {
        reg: '/page/**.js',
        jswrapper: {
            //wrap type. if omitted, it will wrap js file with '(function(){...})();'.
            type : 'amd',

            //you can use template also, ${content} means the file content
            //template : '!function(){${content}}();'
        }
    }
]);
```
