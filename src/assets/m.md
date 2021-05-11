# 用 CSS 实现三角形与平行四边形

原文：[用 CSS 实现三角形与平行四边形](http://jerryzou.com/posts/use-css-to-paint-triangle-and-parallelogram/?utm_source=tuicool), 作者：[邹润阳](mailto:jerry.zry@outlook.com)

最近在逛某个技术网站的时候，感觉文章关键词上的样式好酷炫啊。于是我将那种写法照搬到了我的博客中，也许最近逛过我博客的小伙伴已经发现了它出现在哪儿了——分页的样式。来张截图：
[![img](https://colobu.com/2015/08/25/use-css-to-paint-triangle-and-parallelogram/1.png)](https://colobu.com/2015/08/25/use-css-to-paint-triangle-and-parallelogram/1.png)
你在首页的底部也可以看到这样一个分页栏；是不是看上去还不错？下面就来看看这是如何实现的吧~

## 第一种方法：利用border

第一种方法是借助border属性 hack 出三角形，然后通过一个矩形拼接两个三角形最终制造出一个平行四边形。为什么使用border可以产生三角形呢？先来看看一张图片：
[![img](https://colobu.com/2015/08/25/use-css-to-paint-triangle-and-parallelogram/2.png)](https://colobu.com/2015/08/25/use-css-to-paint-triangle-and-parallelogram/2.png)
看了图中的三个小图形的变化过程，你应该已经清楚了一半。其实 hack 出三角形只需要两个条件，第一，元素本身的长宽为0；其次，将不需要的部分通过 border-color 来设置隐藏。通过类似的方法，你还可以创造出梯形，上图中的三个图形的代码如下。（另附 [CodePen 示例](http://codepen.io/jerryzou/pen/mJYJym)）

```
#first {
  width: 20px;
  height: 20px;
  border-width: 10px;
  border-style: solid;
  border-color: red green blue brown;
}

#second {
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: red green blue brown;
}

#third {
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: red transparent transparent transparent;
}
```

接下来就要考虑如何拼接出一个平行四边形了。在`border`法中，它由三部分组成，分别是左三角形、矩形、右三角形。如果每次绘制平行四边形都要创建三个元素显然过于麻烦了，所以在这里`:before`和`:after`伪元素是个不错的选择。下面我们实现一下这样的效果：
[![img](https://colobu.com/2015/08/25/use-css-to-paint-triangle-and-parallelogram/3.png)](https://colobu.com/2015/08/25/use-css-to-paint-triangle-and-parallelogram/3.png)

为了将三角形与矩形无缝拼接到一起，多处属性要保持一致，所以使用类似 Less, Sass, Stylus 等 CSS 预处理器来写这段代码会更容易维护，下面给出 Scss 版本的代码。（另附 [CodePen 链接](http://codepen.io/jerryzou/pen/ZGNGWZ?editors=110)）

```
//三角形的宽高
$height: 24px;
$width: 12px;

//对平行四边形三部分的颜色进行赋值
@mixin parallelogram-color($color) {
  background: $color;
  &:before { border-color: transparent $color $color transparent; }
  &:after { border-color: $color transparent transparent $color; }
}

//单个三角形的样式
@mixin triangle() {
  content: '';
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  border-style: solid;
  border-width: $height/2 $width/2;
  top: 0;
}

//平行四边形的样式
.para {
  display: inline-block;
  position: relative;
  padding: 0 10px;
  height: $height;
  line-height: $height;
  margin-left: $width;
  color: #fff;

  &:after {
    @include triangle();
    right: -$width;
  }

  &:before {
    @include triangle();
    left: -$width;
  }

  @include parallelogram-color(red);
}
```

需要注意的是，如果通过 `$height`、`$width` 设置的三角形斜率太小或太大都有可能造成渲染出锯齿，所以使用起来要多多测试一下不同的宽高所得到的视觉效果如何。