var today = new Date();
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

var dd = String(today.getDate());


document.getElementById("hour").innerHTML = hour;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

document.getElementById("date").innerHTML = dd;

if (hour > 0 && hour < 12) {
    document.getElementById("greetings").innerHTML = "Good Morning";
} else if (hour >= 12 && hour < 17) {
    document.getElementById("greetings").innerHTML = "Good Afternoon";

} else if (hour >= 17 && hour < 20) {
    document.getElementById("greetings").innerHTML = "Good Evening";

} else {
    document.getElementById("greetings").innerHTML = "Night";

}



// setTimeout(updateDiv, 50);

//  function updateDiv()
// { 
//     $( "seconds" ).load(window.location.href + " seconds" );
// }