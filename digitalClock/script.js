// hold dom elements
let hour = document.getElementById("h");
let min = document.getElementById("m");
let sec = document.getElementById("s");
let amPm = document.getElementById("mode");

const showTime = () => {
  // current time
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let setAmPm = "AM";

  // hours
  if (h < 10) {
    h = "0" + h;
  } else if (h > 12) {
    h = h - 12;
    h = "0" + h;
    setAmPm = "PM";
  } else {
    h;
  }

  // minutes
  m = m < 10 ? (m = "0" + m) : m;
  // seconds
  s = s < 10 ? (s = "0" + s) : s;

  // output
  hour.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  amPm.innerHTML = setAmPm;
};
showTime();
setInterval(showTime, 1000);
