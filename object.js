var person = {
    firstName: "Bill",
    lastName: "Gates",
    id: 678,
    fullName: function(){//方法是作为属性来存储的函数
        return this.firstName + " " + this.lastName;
    }//两种访问属性的方式objectName.propertyName和objectName["propertyName"],访问对象方法语法：objectName.fullName()
}//var x = new String()不允许字符串、数值和布尔值声明为对象，强行声明会增加代码复杂性并降低执行速度。