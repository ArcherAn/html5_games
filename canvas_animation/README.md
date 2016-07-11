## **canvas中使用Animate动画** ##
**如图：**

![](http://i.imgur.com/s5R1C92.png)


**1、**本程序中主要是使用了**requestAnimationFrame()**方法让浏览器自行决定帧速率，同时为了考虑各种浏览器下对**animate()**函数的兼容性不同，综合解决问题，将代码封装在**window.requestNextAnimationFrame()**方法中去。

**2、**程序中同时还是用了一个简单的等式，根据当前帧距离上一帧的时间，计算出每秒钟播放的帧数（帧速率，简称 fps）

具体代码实现如 **animation_test.html** 和 **requestNextAnimationFrame.js**