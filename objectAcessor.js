//设置对象访问器
var person = {
    firstName: "Bill",
    lastName: "Gates",
    language: "en",
    get gtlang(){
        return this.language.toUpperCase();
    },
    set stLang(lang){
        this.language = lang.toUpperCase();
    }
}
person.lang = "zh";
//添加getter 和 setter
Object.defineProperty(person,"reset",{get: function(value){this.language = value;}},{enumerable: flase});