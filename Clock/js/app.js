var today = new Date();
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

var dd = String(today.getDate());
// var months1=['jan','Feb','march','april','may','june','july','aug','sept'];
// var mm=months1[today.getMonth()];
var mm = today.toLocaleString('default', { month: 'long' });
var yy = String(today.getFullYear());


var days1 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var dow = days1[ today.getDay() ];




document.getElementById("hour").innerHTML = hour;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

document.getElementById("day").innerHTML = dd;
document.getElementById("month").innerHTML = mm;
document.getElementById("year").innerHTML = yy;
document.getElementById("dayOfWeek").innerHTML = dow;




if (hour > 0 && hour < 12) {
    document.getElementById("greetings").innerHTML = "Good Morning";
} else if (hour >= 12 && hour < 17) {
    document.getElementById("greetings").innerHTML = "Good Afternoon";

} else if (hour >= 17 && hour < 20) {
    document.getElementById("greetings").innerHTML = "Good Evening";

} else {
    document.getElementById("greetings").innerHTML = "Night";

}
