
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