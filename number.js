var x = 123;
x.toString();//从变量返回123
(123).toString();//toString以字符串返回数值，从文本123返回123
(100 + 23).toString();//从表达式返回123
x.toExponential(2);//返回字符串，数值以指数形式表示。
x.toFixed(2);//返回字符串，包含了指定位数小数（四舍五入）的数字。
x.toPrecision(3);//指定数值总长度
/*valueOf以数值方式返回数值 
Number,parseInt,parseFloat将变量转换为数字，是全局方法
数字属性不可以用于变量，属于名为number的JavaScript数字对象包装器，只能以Number.Infinity进行调用*/