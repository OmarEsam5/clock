let clocks = document.querySelector(".clock")
let divHour = document.querySelector(".hours")
let divMinute = document.querySelector(".minute")
let divSecound = document.querySelector(".secound")



function clo() {
    let DateTime = new Date()
    let hours = DateTime.getHours()
    let minute = DateTime.getMinutes()
    let secound = DateTime.getSeconds()
    let da = "AM"
    
    
    if(hours > 12) {
        da = "PM"
        hours = hours-12
    }
    let secoundValue = secound * 6
    let minuteValue = minute * 6
    let hoursValue = hours * 30

    // clock.innerHTML = `${hours} : ${minute} : ${secound} : ${da}`;

    function clockD() {
        divSecound.style.transform = `rotate(${secoundValue}deg)`
        divMinute.style.transform = `rotate(${minuteValue}deg)`
        divHour.style.transform = `rotate(${hoursValue}deg)`
    }
    clockD()
    console.log(hours)
}


setInterval(() => {
    clo()
}, 1000);

