"use strict"
var x = 5;  // 初始化 x
elem = document.getElementById("demo");      // 查找元素
elem.innerHTML = "x is " + x + " and y is " + y;  // 显示 x 和 y
var y = 7;  // 不会提升初始化，因此上条语句中的y属于未定义行为。
{
    let x = 10;//限定块作用域,不同于var,x在块作用域之外无法使用x
}

var x = 7;
{
    var x = 6;
}/*块之后x将为6 通过Let定义的全局变量不属于window对象,let声明不会提升
常量不可以修改,但常量对象可以修改属性,但无法重新为对象赋值*/
carName = "volvo";
const carName = "Volvo";/*const不会声明提升*/