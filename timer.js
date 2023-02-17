const milisecsDisplay = document.querySelector("#milisecond");
const secsDisplay = document.querySelector("#second");
const minsDisplay = document.querySelector("#minute");
const hrsDisplay = document.querySelector("#hour");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let milisecs = 0;

document.body.onkeyup = function(e){ 
    if(e.keyCode == 17){ //ctr key to start timer
        startTimer(); 
    }
    if(e.keyCode == 32){ //spacebar to pause timer
        pausedTimer(); 
    }
    if(e.keyCode == 13){ //enter to pause timer
        stopTimer(); 
    }
};

function startTimer() {
    
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTimer,75);
        // intervalAppend = setInterval(appendText, 5000);
        // setInterval(stopTimer, 60000);
    }
    
}

function updateTimer() {
    
    elapsedTime = Date.now() - startTime;
    milisecs = Math.floor((elapsedTime)%60);
    secs = Math.floor((elapsedTime/1000)%60);
    mins = Math.floor((elapsedTime/(1000*60))%60);
    hrs = Math.floor((elapsedTime/(1000*60*60))%60);

    milisecs = pad(milisecs);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    milisecsDisplay.textContent = `${milisecs}`;
    secsDisplay.textContent = `${secs}`;
    minsDisplay.textContent = `${mins}`;
    hrsDisplay.textContent = `${hrs}`;

    function pad(unit){
        return(("0")+unit).length > 2 ? unit : "0" + unit;
    }

    getTime = hrs + ':' + mins + ':' + secs + ':' + milisecs;

    return getTime;

}

function appendText() {
    document.getElementById("timer_display").innerHTML += hrs + ':' + mins + ':' + secs + ':' + milisecs + "<br>";
}

function pausedTimer() {
    
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
    
}

function stopTimer() {
       
    paused = true;
    clearInterval(intervalId);
    //clearInterval(intervalAppend);
  
    let hrs = 0;
    let mins = 0;
    let secs = 0;
    let milisecs = 0;

    milisecs = pad(milisecs);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    milisecsDisplay.textContent = `${milisecs}`;
    secsDisplay.textContent = `${secs}`;
    minsDisplay.textContent = `${mins}`;
    hrsDisplay.textContent = `${hrs}`;

    function pad(unit){
        return(("0")+unit).length > 2 ? unit : "0" + unit;
    }
    
}

