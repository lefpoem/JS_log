var txt = "ABCDEFGHI";
var sin = txt.length ;//string具有属性length
var x = "中国是瓷器的故乡因此china与\"china(中国)\"同名"; //使用转义字符
/*不允许使用反斜杆对JavaScript进行折行。 */
var pos = x.indexOf("China");//调用string的indexOf方法：找出china的首次出现位置，未找到返回-1
var pos2 = x.lastIndexOf("China");//返回CHina出现的最后一个位置，未找到返回-1，indexof都接受指定位置的第二个参数
/*indexOf从指定位置到后搜索，lastIndexOf从指定位置从后向前进行搜索，也可以使用search检索字符串中的字符
三种提取字符串的方式：slice(start,end);substring(start,end);substr(start,length)
replace("china","nice")只替换首个匹配，且repalce对大小写敏感
toUpperCase(),无参数，转为大写
toLowerCase(),无参数，转为小写
concat("",text2)连接两个字符串
trim()用于删除字符串两端的空白 
提取字符串的两种方法:charAt(position);
charCodeAt(position)返回的是字符的unicode码
split(",")将字符串转化为数组*/
var txt = "hello";
var str = txt.split("");//将字符串转换为数组可以使用str[]进行访问