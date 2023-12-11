//google analytics

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-0YPQMTPTKJ');

//dyslecia font toggle

let toggle = document.querySelector(".toggle");
let text = document.querySelector(".text");

function Animatedtoggle(){
    toggle.classList.toggle("active");

    if(toggle.classList.contains("active")){
        document.getElementById("body").style.fontFamily = "OpenDyslexic";
        text.innerHTML = "Toggle Dyslexia Font     ";

    }
    
    else{
        document.getElementById("body").style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
        text.innerHTML = "Toggle Dyslexia Font";
    }
}