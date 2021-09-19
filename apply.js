//apply()方法：接受数组中的参数
var person = {
    fullname:function(city, country){
        this.firstName + "" + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName: "Bill",
    lastName: "Gates"
}
person.fullname.apply(person1, ["Osolo","Norway"]);
//JavaScript数组没有max方法
Math.max.apply(null, [1,2,3]);//返回最大数字3,第一个参数无关紧要
//以下三种方式相同,都会返回3
Math.max.apply(Math, [1,2,3]);
Math.max.apply("", [1,2,3]);
Math.max.apply(0,[1,2,3])