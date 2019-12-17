var name = "Cristian";
var message = "Hello " + name + "!"; 
var timeout = 3000; 
var isNight = false; 
var isMorning = false;
var nothing = null;
var date = new Date();
var hour = date.getHours();

if(hour >= 20 || hour <= 6) {
    alert("Noapte Buna!");
} else if (hour == 0) {
    alert("Happy new year!")
} else if(hour <=11) {
    alert("Buna dimineata!");
} else if (hour<=17) {
    alert("Buna ziua!");
} else {
    alert("Buna seara!");
}
setTimeout(sayHello, timeout)
function sayHello() {
    //    alert(message);
    console.log(message);
}
//  sa creem un imput tip text cu un buton submit si sa apara un alert cu generatia persoanei respectivedam elementului un id si folosim get element id si are o proprietarea are alrea value