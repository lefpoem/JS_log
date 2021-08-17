function Var(){
    var length = 7;
    var length = 7.00;//JavaScript会自动忽略小数点，故两者结果都为7
    var length = "nice"; //JavaScript拥有动态类型，可为不同类型赋值。
    var lastName = "Gates";
    var cars = ["Porsche","Volvo","BMW"];//数组
    var x = {firstName:"Bill",lastName:"Gates"};//对象
    typeof""//返回变量或表达式的类型。返回“string”
}
var x = myFunction(7,8);
function myFunction(a,b){
    return a * b
}//myFunction引用的函数对象，myFuction()引用的是函数结果。  