/**
 * Created by Administrator on 2016/7/12.
 */


// 一个动画运行持续时间，以毫秒为单位。运行时间取决于你
// 然而开始和结束一段动画都不会自动的停止
// 你可以使用isOver() 方法来检查一个动画是否结束了
// 你也可以通过 isRunning() 来判断动画是否正在运行。注意，动画可以结束，但仍然在运行。
// 你还可以提供一种变速功能，使得动画中融入非线性运动。如：淡入、淡出、弹性等。
AnimationTimer = function (duration, timeWarp)  {      // 定义一个动画时间计时器
    this.timeWarp = timeWarp;

    if (duration !== undefined) this.duration = duration;     // 定义一帧动画所花费的时间
    else                        this.duration = 1000;          // 如果没有定义，默认是1s

    this.stopwatch = new Stopwatch();             // 声明一个秒表对象
};

AnimationTimer.prototype = {
    start: function () {                         // 定义秒表开始，即动画开始
        this.stopwatch.start();
    },

    stop: function () {
        this.stopwatch.stop();                   // 定义秒表结束，即动画结束
    },

    getRealElapsedTime: function () {
        return this.stopwatch.getElapsedTime();    // 获得动画实际所经过的时间
    },

    getElapsedTime: function () {
        var elapsedTime = this.stopwatch.getElapsedTime(),
            percentComplete = elapsedTime / this.duration;        // 定义完成的百分比  实际时间/经历的时间

        if (!this.stopwatch.running)    return undefined;
        if (this.timeWarp == undefined) return elapsedTime;

        return elapsedTime * (this.timeWarp(percentComplete) / percentComplete);
    },

    isRunning: function() {
        return this.stopwatch.running;
    },

    isOver: function () {
        return this.stopwatch.getElapsedTime() > this.duration;
    },

    reset: function() {
        this.stopwatch.reset();
    }
};

/* 动画中融入的非线性运动 */
AnimationTimer.makeEaseOut = function (strength) {
    return function (percentComplete) {
        return 1 - Math.pow(1 - percentComplete, strength*2);
    };
};

AnimationTimer.makeEaseIn = function (strength) {
    return function (percentComplete) {
        return Math.pow(percentComplete, strength*2);
    };
};

AnimationTimer.makeEaseInOut = function () {
    return function (percentComplete) {
        return percentComplete - Math.sin(percentComplete*2*Math.PI) / (2*Math.PI);
    };
};

AnimationTimer.makeElastic = function (passes) {
    passes = passes || 3;
    return function (percentComplete) {
        return ((1-Math.cos(percentComplete * Math.PI * passes)) *
            (1 - percentComplete)) + percentComplete;
    };
};

AnimationTimer.makeBounce = function (bounces) {
    var fn = AnimationTimer.makeElastic(bounces);
    return function (percentComplete) {
        percentComplete = fn(percentComplete);
        return percentComplete <= 1 ? percentComplete : 2-percentComplete;
    };
};

AnimationTimer.makeLinear = function () {
    return function (percentComplete) {
        return percentComplete;
    };
};
