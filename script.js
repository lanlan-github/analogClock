const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


let hrPosition = 20;
let minPosition = 120;
let secPosition = 267;

var date = new Date();
hrPosition = ((date.getHours())* 30) + date.getMinutes() * 6 / 12;
minPosition = (date.getMinutes() * (360 / 60)) + (date.getSeconds() * (360/60/60));
secPosition = date.getSeconds() * (360 / 60);

function runTheClock() {
  hrPosition += 3/360;
  minPosition += 6/60;
  secPosition += 6;
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
