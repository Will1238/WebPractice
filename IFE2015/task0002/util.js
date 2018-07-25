function isArray(arr){
    if(arr instanceof Array){
        return true;
    } else{
        return false;
    }
}

function isFunction(fn){
    if(typeof fn == "function"){
        return true;
    } else{
        return false;
    }
}

function cloneObject(src){
    var dst;
    if(src instanceof Date){
        dst = new Date(src.toUTCString());
    } 
    else if(src instanceof Array){
        dst = new Array(src.length);
        for(var i=0; i<src.length; i++){
            if(src[i] instanceof Array){
                dst[i] = cloneObject(src[i]);
            } else{
                dst[i] = src[i];
            }
        }
    }
    else if(typeof src == "number" ){
        dst = src.valueOf(number);
    }
    else if(typeof src == "boolean"){
        dst = src.valueOf(boolean);
    }
    else if(typeof src == "string"){
        dst = src.valueOf(string);
    }
    
    return dst;
}