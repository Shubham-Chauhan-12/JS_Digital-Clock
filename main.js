const hours = document.getElementById('#hours');
const minutes = document.getElementById('#minutes');
const seconds = document.getElementById('#seconds');
const period = document.getElementById('#period');


const currenthours = new Date().getHours();
const currentminutes = new Date().getMinutes();
const currentseconds = new Date().getSeconds();


const currentPeriod = currenthours >= 12 ? "PM" : "AM";

console.log(currenthours,
    currentminutes,
    currentseconds , currentPeriod);


 hours.innerHTML = currenthours ;
 minutes.innerHTML = currentminutes;
 seconds.innerHTML = currentseconds;
 period.innerHTML =  currentPeriod