var person = {firstName:"Bill", lastName:"Gates", age:62, eyeColor:"blue"}

var x = person;//x就是person,并不是person的副本
x.age = 10;
//创建对象方法语法:methodName:function(){};访问对象方法语法:objectName.methodName()