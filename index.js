setInterval(setTime, 1000);

function setTime(){
    const time = new Date();
    //let minutes = time.getMinutes();
    let days = time.getDate();
    document.getElementById('time2').innerHTML = 16 - days + ' days';
    // if (minutes < 10){
    //     minutes = "0" + minutes;
    // }
    // let second = time.getSeconds();
    // if (second < 10){
    //     second = "0" + second;
    // }
    // let hours = time.getHours();
    // if(hours > 12){
    //     hours = hours - 12;

    //     if(hours < 10){
    //         hours = "0" + hours;
    //     }
    // }
    // else if(hours < 10){
    //     hours = "0" + hours;
    // }

    // if(time.getHours() > 12){
    //     document.getElementById('time').innerHTML = hours + ' : ' + minutes + ' : ' + second + ' pm'
    // }
    // else{
    //     document.getElementById('time').innerHTML = hours + ' : ' + minutes + ' : ' + second + ' am';
    // }
  

    let countHours = 24 - time.getHours();
    if(countHours < 10){
        countHours = '0' + countHours;
    }
    let countMinutes = 60 - time.getMinutes();
    if(countMinutes < 10){
        countMinutes = '0' + countMinutes;
    }
    let countSeconds = 60 - time.getSeconds();
    if(countSeconds < 10){
        countSeconds = '0' + countSeconds;
    }
    document.getElementById('time').innerHTML = countHours + ' : ' + countMinutes + ' : ' + countSeconds;

    var music = new Audio();
    music.src = "sound/beep-07.mp3";
   // music.play();
}



