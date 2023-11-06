//Hour, minute and second variable;
var hr = 0;
var min = 0;
var sec = 0;

//Button Define here
let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");


//timeInterval variable created here to use globally
var timeInterval = "";

//Display Box DefineHere
var display = document.querySelector("#timeDisplay");

//This Function will initialize "0" before single Digit Number 
function pad(num, size){
num = num.toString();
while(num.length < size) num = "0" + num
return num;
}

//This Function will create a output
function start(){
        sec = sec + 1;
        if(sec>60){
            sec = 0;
            min = min+1;
        }
        if(min > 60){
            min = 0;
            hr = hr+1;
        }
       var second = pad(sec , 2);
       var minute = pad(min, 2);
       var hour = pad(hr, 2);
       display.innerHTML = hour + ":" + minute + ":" + second;
}

//Function will be call when user press Start button
//This function will give interval between function call
function startWatch(){
    timeInterval =  setInterval(start,1000);
    //"text-white" is a Bootstrap class which make text color white.
    startBtn.classList.add("text-white");  
    stopBtn.classList.remove("text-white");
 }

 
//Function will be call when user press Stop button
//This Function will stop interval
function stopWatch(){
    clearInterval(timeInterval);
    startBtn.classList.remove("text-white");
    stopBtn.classList.add("text-white");
}

//Function will bec call when user press reset button
function resetTime(){
    hr = 0;
    min = 0;
    sec = 0;
    var second = pad(sec , 2);
    var minute = pad(min, 2);
    var hour = pad(hr, 2);
    display.innerHTML = hour + ":" + minute + ":" + second;
    clearInterval(timeInterval);
    startBtn.classList.remove("text-white");
    stopBtn.classList.remove("text-white");
}
