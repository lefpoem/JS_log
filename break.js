var cars = ["BMW", "Volvo", "porsche", "Ford"];
var text = "";

list: {
  text += cars[0] + "<br>"; 
  text += cars[1] + "<br>"; 
  break list;//以下两行不执行
  text += cars[2] + "<br>"; 
  text += cars[3] + "<br>"; 
}
/*三种对象类型：对象，日期，数组 */