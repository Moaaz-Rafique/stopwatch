var min = +prompt("Enter minutes")
var sec = +prompt("Enter minutes")
var milisec = 99



var disMin = document.getElementById('min')
var disSec = document.getElementById('sec')
var disMilisec = document.getElementById('milisec')

if (milisec < 10)
    disMilisec.innerHTML = "0" + milisec
else
    disMilisec.innerHTML = milisec

if (sec < 10)
    disSec.innerHTML = "0" + sec
else
    disSec.innerHTML = sec

disMin.innerHTML = min

function timer() {
    milisec--
    disMilisec.innerHTML = milisec

    if (milisec <= 0) {
        sec--
        disSec.innerHTML = sec
        milisec = 99
    } else if (sec <= 0) {
        min--
        disSec.innerHTML = sec
        disMin.innerHTML = min
        sec = 59
    }
}

var inteval

function start() {
    interval = setInterval(timer, 10)
    document.getElementById('startButton').onclick = function () { return };
}

function pause() {
    document.getElementById('startButton').onclick = start
    return clearInterval(interval)
}

function reset() {

    pause()
    min = 0
    sec = 0
    milisec = 0
    disMilisec.innerHTML = "00"
    disSec.innerHTML = '00'
    disSec.innerHTML = '00'
}