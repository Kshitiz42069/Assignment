
function clearscreen(){
    document.getElementById("result").value="";
    console.log("all clear")
}
function disp(value){
    document.getElementById("result").value += value;
}
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}