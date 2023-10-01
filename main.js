const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const period = document.querySelector('#period');


// console.log(hours,minutes,seconds,period);


function digitalClock() {

    let currenthours = new Date().getHours();
    let currentminutes = new Date().getMinutes();
    let currentseconds = new Date().getSeconds();

    let currentPeriod = currenthours >= 12 ? "PM" : "AM";

    // Changing clock format to 12 hr

    if(currenthours >12 ){
        currenthours = currenthours -12;
    }


    // assigned 0 in prefix of single digit value

    currenthours = currenthours < 10 ? "0" + currenthours : currenthours;
    currentminutes = currentminutes < 10 ? "0" + currentminutes : currentminutes;
    currentseconds = currentseconds < 10 ? "0" + currentseconds : currentseconds;
    
    

    hours.innerHTML = currenthours;
    minutes.innerHTML = currentminutes;
    seconds.innerHTML = currentseconds;
    period.innerHTML = currentPeriod;

}
// alert('it is working');

setInterval(digitalClock, 1000);




