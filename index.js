const display= document.getElementById("display");
let timer = null;
let starTime=0;
let elapsedTime=0;
let isRunnig=false;

function start(){

    if(!isRunnig){
        starTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunnig = true;

    }
}

function stop(){
    if(isRunnig){
        clearInterval(timer);
        elapsedTime = Date.now() - starTime;
        isRunnig = false;
    }
}

function reset(){
    clearInterval(timer);
    starTime=0;
    elapsedTime=0;
    isRunnig=false;
    display.textContent = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime-starTime;
    
    let hr = Math.floor(elapsedTime/(1000 *60*60));
    let min = Math.floor(elapsedTime/(1000*60) %60);
    let sec = Math.floor(((elapsedTime/1000)%60));
    let ms = Math.floor((elapsedTime%1000)/10);

    hr = String(hr).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec = String(sec).padStart(2,"0");
    ms = String(ms).padStart(2,"0");



    display.textContent = `${hr}:${min}:${sec}:${ms}`;
}