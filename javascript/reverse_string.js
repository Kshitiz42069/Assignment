function reverse(str){
    var newStr = "";
    for(var i=str.length-1; i >=0; i--){
        newStr = newStr + str[i];
    }
    return newStr;
}
var str = prompt("enter the string");
reverse(str);