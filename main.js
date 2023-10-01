const hours = document.getElementById('#hours');
const minutes = document.getElementById('#minutes');
const seconds = document.getElementById('#seconds');
const period = document.getElementById('#period');


const currenthours = new Date().getHours();
const currentminutes = new Date().getMinutes();
const currentseconds = new Date().getSeconds();


const currentZone = currenthours >= 12 ? "PM" : "AM";