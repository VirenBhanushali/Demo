var Globalperson = new Array();
var a=0;
var prop = "";
var prop1="";

function createPerson()
{
    var name = prompt("Provide Name for 1 Person");
    var age = prompt("provide age for a person");
    var person = new Object();
    person.name = name;
    person.age = age;
    this.Globalperson[a]=person;
    a++;
    alert("person added");
  
}
function getDetails(){
   
for(p in Globalperson)
{
    console.log(Globalperson[p]);
}
}
function deleteProp()
{
    var person1;
    for(a in Globalperson)
    {
        person1 =  Globalperson[a];
    }
    for(b in person1)
    {
        prop = prop + b +" ";
    }
    console.log(prop);
    delete person1.age;
    for(c in person1)
    {
        prop1 = prop1 + c +" ";
    }
    console.log(prop1);
}