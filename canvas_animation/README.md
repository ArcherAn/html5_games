## **canvas中使用Animate动画** ##
**如图：**

![](http://i.imgur.com/cwKpjAv.png)


本程序中主要是使用了**requestAnimationFrame()**方法让浏览器自行决定帧速率，同时为了考虑各种浏览器下对**animate()**函数的兼容性不同，综合解决问题，将代码封装在**window.requestNextAnimationFrame()**方法中去。

具体代码实现如 **animation_test.html** 和 **requestNextAnimationFrame.js**