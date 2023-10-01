const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const period = document.querySelector('#period');


console.log(hours,minutes,seconds,period);


const currenthours = new Date().getHours();
const currentminutes = new Date().getMinutes();
const currentseconds = new Date().getSeconds();


const currentPeriod = currenthours >= 12 ? "PM" : "AM";

console.log(currenthours,
    currentminutes,
    currentseconds , currentPeriod);



function digitalClock(){
        hours.innerHTML = currenthours ;
        minutes.innerHTML = currentminutes;
        seconds.innerHTML = currentseconds;
        period.innerHTML =  currentPeriod;

}
alert('it is working');
digitalClock();


