# jQuery

1.jQuery是一个JavaScript库,极大简化了JavaScript编程
2.jQuery是一个"写的更少,但做的更多"的轻量级JavaScript函数库
3.CDN(Content Delivery Network)内容存储和分发网络,CDN=更智能的镜像+缓存+流量导流
4.如果电脑上无jquery本地文件,则需要使用Microsoft或Google的CDN jQuery核心文件
5.jQuery语法

> ==基础语法:$(selector).action()==
> 1.\$美元符号定义jQuery
> 2.选择符(selector)"查询"和"查找"HTML元素
> 3.jQuery的action()执行对元素的操作

6.jQuery使用的语法是XPath与CSS选择器语法的组合。
7.jQuery $(document).ready(function(){jQuery代码在这里。});此做法是为了防止文档在完全加载（就绪）之前运行jQuery代码。
8.jQuery专为事件处理特别设计
9.可以定义\$的别名来避免冲突,语法如:var jq=Jquery.noConflict()
10.jQuery遍历采用树遍历
11.jQuery提供jQuery load()方法是简单但强大的Ajax方法,load从服务器加载数据,并把返回数据放入被选元素中。语法$(selector).load(URL,data,callback)
12.jQuery完成
