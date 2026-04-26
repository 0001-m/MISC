// let time = 0;
// let timer;

// function start() {
//     timer = setInterval(function() {
//         time++;
//         document.getElementById("time").innerText = time;
//     }, 1000);
// }

// function stop() {
//     clearInterval(timer);
// }

// function reset() {
//     clearInterval(timer);
//     time = 0;
//     document.getElementById("time").innerText = time;
// }


let time = 0;
let timer;

function start() {
    timer = setInterval(function(){
        time++;
        document.getElementById("time").innerText = time;
    }, 1000);
}

function stop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    time = 0;
    document.getElementById("time").innerText = time;
}