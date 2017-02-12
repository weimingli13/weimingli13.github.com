/**
 * Created by ZhuWQ on 2016/10/26.
 */

function getStyle(obj,name) {
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
}

function move(obj,json,options) {
    // 判断参数的是否传，没有传给默认值
    options = options || {};
    options.duration = options.duration || 700;
    options.easing = options.easing || 'ease-out';

    //先关后开
    clearInterval(obj.timer);
    // 总次数
    var count = Math.floor(options.duration/30);
    var start = {}; // 起点
    var dis = {}; // 总距离
    for (var name in json) {
        start[name] = parseFloat(getStyle(obj,name));
        dis[name] = json[name] - start[name];
    }

    var n = 0; // 当前已经走了多少次
    obj.timer = setInterval(function(){
        n++;

        // 循环设置样式
        for (var name in json) {
            switch(options.easing) {
                case 'linear':
                    var a = n / count;
                    var cur = start[name] + dis[name]*a;
                    break;
                case 'ease-in':
                    var a = n / count;
                    var cur = start[name] + dis[name] * Math.pow(a,3);
                    break;
                case 'ease-out':
                    var a = 1 - n/count;
                    var cur = start[name] + dis[name]*(1-Math.pow(a,3));
                    break;
            }

            if (name == 'opacity') {
                obj.style.opacity = cur;
                obj.style.filter = 'alpha(opacity:'+cur*100+')';
            } else {
                obj.style[name] = cur + 'px';
            }
        }


        if (n == count) {
            clearInterval(obj.timer);
            // 链式运动
            options.complete && options.complete();
        }
    },30);
}
