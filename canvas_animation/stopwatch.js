/**
 * Created by Administrator on 2016/7/12.
 */


// 像现实中的事物一样，你可以开始和停止一个计时表，你可以查找出秒表已经运行的时间
// 当你停止一个秒表后，它的 getElapsedTime() 方法将会返回动画在开始和结束之间所用的时间
// 秒表主要用于定时的动画效果
Stopwatch = function ()  {                 // 定义一个秒表的对象
};

// You can get the elapsed time while the timer is running, or after it's
// stopped.

Stopwatch.prototype = {                 // 定义对象的属性和方法
    startTime: 0,                        // 开始时间
    running: false,                      // 是否正在运行
    elapsed: undefined,                  // 已经经过的时间

    start: function () {                 // 定义秒表开始
        this.startTime = +new Date();
        this.elapsedTime = undefined;
        this.running = true;
    },

    stop: function () {
        this.elapsed = (+new Date()) - this.startTime;      // 计算经过的时间
        this.running = false;
    },

    getElapsedTime: function () {          // 计算动画运行的时间 如果还在运行，则计算当前使用的时间，如果停止了，则返回elapsed
        if (this.running) {
            return (+new Date()) - this.startTime;
        }
        else {
            return this.elapsed;
        }
    },

    isRunning: function() {              // 判断秒表是否正在运行
        return this.running;
    },

    reset: function() {                  // 重置秒表
        this.elapsed = 0;
    }
};
