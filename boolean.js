var b1 = Boolean(100);//true
var b2 = Boolean(3.14);//true
var b3 = Boolean(0)//false
/*所有不具有真实值都为false */
var b4 = Boolean(-0);//false
var b5 = Boolean("");//空值false
var b6 = Boolean();//undefined为false
var b7 = Boolean(null);//null为false
var b8 = Boolean(10/"H");//NaN为false