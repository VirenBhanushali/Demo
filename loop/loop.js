var demo = ["English","Maths" , "Science"];
var demo2 = new Array();

for(var i = 0 ; i < demo.length ; i++)
{
    var marks = prompt("Enter Marks For " + demo[i]);
    console.log(marks);
    demo2[i] = marks;
}

for(var j = 0 ; j < demo2.length ; j++)
{
   document.write("<br>Marks for "+demo[j]+" = "+demo2[j]);
}
var x = 0;
while(x <= 10)
{
    console.log(x);
    x++;
}
do{
console.log(x);
}while(x<10)