/*对于JSON格式文本,首先转换为JavaScript字符串 */
//for instance
var txt = '{"employers":['+
'{"firstName": "Bill","lastNmae": "Gates"}'+
'{"firstName": "Bill","lastNmae": "Gates"}'+
'{"firstName": "Bill","lastNmae": "Gates"}]}';
var obj = JSON.parse(txt);