function myFuction(){
    var greeting;
    var time = new Date().getHours();
    if(time < 10){
        greeting = "早安";
    }else if(time < 20){
        greeting = "午安";
    }else{
        greeting = "晚安";
    }
    document.getElementById("demo").innerHTML = greeting;
}
var x = 123;
switch(x){
    case 1:
        x = 1
        break;
    case 2:
        x = 2;
    default:
        x = 3;
}
