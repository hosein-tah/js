var minute = +prompt("Enter Your Minute: ");
var second = +prompt("Enter your second: ");
var txt = prompt("Enter your texts ");
var timer = setInterval(() => {
  if (second === -1) {
    minute--;
    second = 59;
  }
  if (minute === 0 && second === 0) {
    console.log(txt);
    clearInterval(timer);
  }
  console.log(minute + ":" + second);
  second--;
}, 100);

