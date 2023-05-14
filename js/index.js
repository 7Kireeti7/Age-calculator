function agebutton(){
var dateinyear=parseInt( document.getElementById("date-input").value)
    var current_date = new Date().getFullYear();  
    console.log(current_date,"cur")
console.log (2023-dateinyear)
var age =  current_date - dateinyear ;

document.getElementById("results").innerHTML= `Your Age is ${age} years old.`
}