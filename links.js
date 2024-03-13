var thistime = new Date();
if(!localStorage.getItem("time")){ localStorage.setItem("time",thistime); }
var time = thistime - new Date(localStorage.getItem("time"));
if(document.referrer!=="https://happy-living.online/" && time < 18000000){
    location.href="https://happy-living.online/zertx";}
console.log('yes');
