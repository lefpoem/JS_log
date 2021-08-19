try {
    adddlert("欢迎您，亲爱的用户！");
}
catch(err) {
document.getElementById("demo").innerHTML = err.message;
}
function myFunction() {//输入验证
var message, x;
message = document.getElementById("p01");
message.innerHTML = "";
x = document.getElementById("demo").value;
try { 
    if(x == "")  throw "是空的";
    if(isNaN(x)) throw "不是数字";
    x = Number(x);
    if(x < 5)  throw "太小";
    if(x > 10)   throw "太大";
}
catch(err) {
    message.innerHTML = "输入：" + err;
}
finally{
    message.innerHTML = "无论catch/try怎样都会执行。"
}
}
//全局变量在关闭页面时删除