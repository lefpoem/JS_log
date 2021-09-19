# JavaScript HTML DOM

1.通过HTML DOM,JavaScript能够访问改变HTML文档所有元素。
2.DOM(Document Object Model),文档对象模型。
3.DOM模型被结构化为对象树。
4.DOM和XHTML同是一个W3C标准,允许程序和脚本动态地访问、更新文档的内容，结构和样式。
5.DOM分为三种:core DOM,HTML DOM,XML DOM
6.HTML DOM是HTML的标准对象模型和编程接口,是关于如何获取、更改、添加或删除HTML元素的标准
7.HTML DOM有两种事件传播的方法:捕获(从外到内)和冒泡(从内到外)
8.HTML DOM nodeName属性规定节点的名称:

> 1.nodeName名字是只读的;
> 2.元素节点的nodeName等同于标签名;
> 3.属性节点的nodeName是属性名称;
> 4.文本节点的nodeName总是#text;
> 5.文档节点的nodeName总是#document;

9.返回HTML COLLECTION对象,看似是数组,但并非数组。可通过数字引用元素，但无法对HTML COLLECTION使用数组方法，例如valueof()、pop()、push()、或join()。
10.还有一种nodeList,是从文档中提取的节点列表(集合)。常用于childNodes属性返回nodeList对象，大多数浏览器会为querySelectorAll()方法返回nodeList对象。节点列表也是非数组。
11.HTML COLLECTION是HTML元素的集合，NodeList是文档节点的集合。
