function doSquare(a){
    console.log("This is Named Function");
    return a*a;
}
var a = prompt("Input de re bete");
//alert(doSquare(a));
document.write("<h1 style='color:red;'> Square is "+doSquare(a) +" </h1>");
 var square = function(a){
     alert("Anonymous Function h bete, ye le Square tera ");
    return a*a;

}
//document.write(square(a));

//var cons =  new Function("a","console.log(a*a)");
//cons(a);
 (function (a){
console.log(a*a);
}(a));

