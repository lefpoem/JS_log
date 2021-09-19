//通过call调用不同对象的方法。
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + city + country;
    }
  }
  var person1 = {
    firstName:"Bill",
    lastName: "Gates"
  }
  var person2 = {
    firstName:"Steve",
    lastName: "Jobs"
  }
  x = person.fullName.call(person2, "settel", "USA"); //调用另一个对象，可以接参数
  document.getElementById("demo").innerHTML = x; 