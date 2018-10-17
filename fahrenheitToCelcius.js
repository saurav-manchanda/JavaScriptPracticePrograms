
function toCelcius(){
    var f=Number(document.getElementById("number").value);
    document.getElementById("result").innerHTML="changed to Celcius: "+ (5/9) * (f-32);
  //  window.alert("changed to Celcius"+ (5/9) * (f-32));
}
function toFahrenheit(){
    var c=Number(document.getElementById("number").value);
    document.getElementById("result").innerHTML="changed to Fahrenheit: "+ (9/5)*(c+32);
    // window.alert("changed to Fahrenheit"+(9/5)*(c+32));
}
