/*JavaScript数组用于在单一变量中存储多个值。 */
var cars = ["Saab","BMW","Volvo"];
var cars = new Array("Saab","BMW","Volvo");
cars[0] = "Audi";
document.getElementById("Demo").innerHTML=cars;//通过调用数组名来调用数组
/*数组是一种特殊的对象 */
clen = cars.length;
text = "<ul>";
for (i = 0;i < clen;i++){
    text += "<li>" + cars[i] + "</li>";
}
text += "</ui>";
document.getElementById("demo").innerHTML=text;
/*也可以使用如下遍历方式 */
text = "<ul>";
cars.forEach(myFunction);
text += "</ul>";
function myFunction(value){
    text += "<li>" + value + "</li>";
}
cars.push("Audi");//添加新元素
cars[clen] = "Audi";//添加新元素
/*数字只能使用数字索引,对象使用命名索引 
如果对数组使用命名索引进行,将会使数组转换为对象*/