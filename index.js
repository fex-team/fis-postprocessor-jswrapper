/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';
module.exports = function(content, file, conf){
    if(file.isMod || conf.wrapAll){
        //wrap
        if(conf.type === 'amd'){
    //        var deps = file.requires.length ? '[\'' + file.requires.join("', '") + '\']' : '[]';
    //        content = 'define(\'' + file.getId() + '\', ' + deps + ', function(require, exports, module){\n\n' + content + '\n\n});';
            content = 'define(\'' + file.getId() + '\', function(require, exports, module){\n\n' + content + '\n\n});';
        } else {
            content = '(function(){\n\n' + content + '\n\n})();';
        }
    }
    return content;
};