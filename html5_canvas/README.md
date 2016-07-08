## **canvas实现几个基本的画图** ##
**先上图：**

![](http://i.imgur.com/8RPmHZ7.png)

**canvas画图基本步骤：**<br>
1、var canvas = document.getElementById("can");var cxt = canvas.getContext("2d");<br>
2、 cxt.beginPath();                //起始一条路径<br>
3、 如果需要一次性画多个线段或多个图形，则需要调用beginPath()、closePath()、然后是fill()、如果需要出现边框线条，则结尾出需加上stroke()。

具体代码实现见 canvas_plot.html 所示。

## **canvas画圆，五角星** ##
**先上图：**
![](http://i.imgur.com/07hUamq.png)

第一幅图中，实现在鼠标点击任意处，在当前位置画出一个随机颜色的圆<br>
第二幅图中，实现画五角星，并带有一定的阴影，同时利用了偏移量实现的效果

## **canvas实现鼠标拖拽画正多边形** ##
**先上图：**

![](http://i.imgur.com/tLrkD4D.png)<br>

- 实现在画布上点击拖拽鼠标画出正多边形效果。<br>
- 在页面数字输入框中输入多边形的边数，以及起始的角度 [0 - 360] 。<br>
- Erase All 按钮点击可以清除画布内容。<br>

**1、**此效果中用到了canvas 中的 **getImageData** 和 **putImageData** 方法：**getImageData(x,y,width,height)**  复制画布上指定矩形的像素数据， **putImageData(data,x,y,w,h)** 恢复数据。<br>
**2、**鼠标按下时，利用  **getImageData** 先保存画布数据。 鼠标 move时，先用 **putImageData** 恢复数据。这样就能保证画布上已经画好的图一直存在。<br>
**3、**鼠标 move时，多边形的大小根据鼠标移动的距离变化，主要是在 **onmousemove** 事件中获取到鼠标距离，这个距离就是多边形的半径。<br>

具体代码实现见 canvas_learn.html 所示。

## **html5实现的简单小树** ##
这个效果是用递归的方式，不断画出线条组成一棵简单的小树。<br>
**先上图：**

![](http://i.imgur.com/bk0ki8u.png)

**原理说明：**<br>
**1 、**规定 一个树枝上最大的子树枝数（maxBranch=3）三根【这个值可以随便设置】，利用 js 中的随机数生成1-3的数  `subBranches = Math.random()*(maxBranch-1)+1 `，这样子树枝数就是随机的。每次递归循环画出 <span style="color:red">subBranches </span>根子树干。

**2、** 每个子树枝都有个角度<span style="color:red">angle </span>，angle是等于父树枝角度加上子树枝偏离父树枝角度。设子树枝偏离父树枝最大值为45度【计算时都以弧度值计算】： `maxAngle=Math.PI/4`，每次递归循环时偏离值都是从0到<span style="color:red">maxAngle </span>的随机数，并且为了使树看起来更符合实际，这个偏离角度可为正和负，为了得到树枝角度：首先利用 js 随机函数  `Math.random()*maxAngle*2`  生成 0 到 `2*maxAngle` 弧度的随机数，然后减去 maxAngle，这样就得到了 <span style="color:red">-maxAngle </span>到<span style="color:red"> maxAngle </span>的随机弧度值。`newAngle = angle+(Math.random()*maxAngle*2-maxAngle)`;

**3 、**<span style="color:red">branchwidth</span> 树枝的宽度是递减的，每次递归循环<span style="color:red">branchwidth </span>乘上一个小数按比例减小， `branchwidth*=0.7` 。

**4、**通过 <span style="color:red">depth </span>可以控制递归次数，<span style="color:red">depth </span> 越大树越茂盛，树枝节数越多。<span style="color:red">depth </span> 是递减的，当设当<span style="color:red">depth</span> 小于等于2的时候，就代表是叶子，及把划线颜色设置为随机的绿色或者其他颜色。 

具体代码实现见 canvas_tree.html 所示。