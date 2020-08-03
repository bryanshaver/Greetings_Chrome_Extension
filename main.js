function openSettings() {
   document.getElementById("settings").classList.toggle("settings-open");
}

document.getElementById("settings-button").addEventListener('click', openSettings)

let userName = localStorage.getItem('receivedName');

function saveName() {
    localStorage.setItem('receivedName', userName);
}

if (userName == null) {
    userName = "Anon";
}

function changeName() {
    userName = document.getElementById("name-input").value;
    saveName();
}

document.getElementById("name-form").addEventListener('submit', function(e) {
    e.preventDefault()
    changeName();
});

function getGreeting() {
    document.getElementById("greeting").innerHTML = `Hello, ${userName}. ${message}`;
}

const greetingArray = ["Kick some butt!", "Have fun!", "Enjoy your day!", "Welcome back!", "Pop off fam!", "Sieze the Day!", "Today is in your hands!", "Ready for some fun?", "Let's get to it!", "Good to have you back!"];

const message = greetingArray[Math.floor(Math.random() * greetingArray.length)];

getGreeting()

const video = document.getElementById("player")

function playVideo() {
    video.style.display = "inline"
    video.play();
    document.getElementById("peace-button-on").style.display = "none"
    document.getElementById("greeting").style.display = "none"
    document.getElementById("peace-button-off").style.display = "block"
}

function stopVideo() {
    video.style.display = "none"
    video.pause();
    video.currentTime = 0;
    document.getElementById("peace-button-on").style.display = "block"
    document.getElementById("greeting").style.display = "block"
    document.getElementById("peace-button-off").style.display = "none"
}

document.getElementById("peace-button-on").addEventListener('click', playVideo)

document.getElementById("peace-button-off").addEventListener('click', stopVideo)