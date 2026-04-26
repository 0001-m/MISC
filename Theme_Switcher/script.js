// window.onload = function() {
//     let savedTheme = localStorage.getItem("theme");

//     if (savedTheme === "dark") {
//         document.getElementById("body").classList.add("dark");
//     }
// }

// function toggleTheme() {
//     let body = document.getElementById("body");

//     if (body.classList.contains("dark")) {
//         body.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//     } else {
//         body.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//     }
// }


window.onload = function (){
    let savedTheme = localStorage.getItem("theme");

    if(savedTheme === "darl"){
        document.getElementById("body").classList.add("dark");
    }
}

function toggleTheme(){
    let body = document.getElementById("body");

    if(body.classList.contains("dark")) {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else{
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
}