// alert("hello")
function ch(){
    let second = document.getElementById('second');
   // console.log(second);
    let minute = document.getElementById('minute');
    //console.log(minute);
  let hour = document.getElementById('hour');
 // console.log(hour);
 let d = new Date();
 let secondDeg = (d.getSeconds())*6 + 180;
 //console.log(secondDeg)
 second.style.transform = `rotate(${secondDeg}deg)`;

 //For minutes
 let minuteDeg = (d.getMinutes())*6 + 180;
 minute.style.transform = `rotate(${minuteDeg}deg)`;
 //console.log(minuteDeg);
 let hoursDeg = (d.getHours())*30+180;
 hour.style.transform = `rotate(${hoursDeg}deg)`;


 
}
ch();
setInterval(ch,1000)