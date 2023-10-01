const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const period = document.querySelector('#period');


// console.log(hours,minutes,seconds,period);


function digitalClock() {

    const currenthours = new Date().getHours();
    const currentminutes = new Date().getMinutes();
    const currentseconds = new Date().getSeconds();

    const currentPeriod = currenthours >= 12 ? "PM" : "AM";

    hours.innerHTML = currenthours;
    minutes.innerHTML = currentminutes;
    seconds.innerHTML = currentseconds;
    period.innerHTML = currentPeriod;

}
// alert('it is working');

setInterval(digitalClock, 1000);




