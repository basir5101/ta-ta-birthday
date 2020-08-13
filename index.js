setInterval(setTime, 1000);

function setTime(){
    const time = new Date();
    let minutes = time.getMinutes();
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    let second = time.getSeconds();
    if (second < 10){
        second = "0" + second;
    }
    let hours = time.getHours();
    if(hours > 12){
        hours = hours - 12;

        if(hours < 10){
            hours = "0" + hours;
        }
    }
    else if(hours < 10){
        hours = "0" + hours;
    }

    if(time.getHours() > 12){
        document.getElementById('time').innerHTML = hours + ' : ' + minutes + ' : ' + second + ' pm'
    }
    else{
        document.getElementById('time').innerHTML = hours + ' : ' + minutes + ' : ' + second + ' am';
    }
}
