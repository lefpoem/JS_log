var x = function(a,b){return a*b};//定义函数表达式
/*存放于变量中的函数实际上是一个匿名函数，不需要名字 */
var z = x(4, 3)*2;//调用函数

var myFunction = new Function("a","b","return a*b");
/*函数声明会提升，函数表达式不会提示*/

//匿名自调用函数
(function () {
    document.getElementById("demo").innerHTML = "Hello! I called myself";
  })();

//箭头函数不会发生提升，没有this
const x = (x,y) => x*y;
//等价于
const x = function(x,y){
    return x*y;
}