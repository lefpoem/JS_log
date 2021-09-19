//对象构造器
function Person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
/*JavaScript prototype属性允许为对象构造器添加新元素 */
Person.prototype.nationality = "English";//添加一个新元素
Person.prototype.name = function(){
    return this.firstName + "" + this.lastName;
}
var myFather = new Person("Bill","Gates",62,"blue");心愿
myFather.nationality = "English";
myFather.name = function(){
    return this.firstName + "" + this.lastName;
}