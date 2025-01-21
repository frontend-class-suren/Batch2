var second = 0;
var minutes = 0;
var second = 0;
var d = new Date();

setInterval(
  function(){
     d = new Date();
     second = d.getSeconds() * 6;
     minute = d.getMinutes() * 6;
     hour = d.getHours() * 30 + Math.round(minute / 12); 
     document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
     document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)"; 
     document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";  
  },1000
);