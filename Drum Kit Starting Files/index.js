let buttons = document.querySelectorAll(".drum");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        new Audio(`/Drum Kit Starting Files/sounds/${button.getAttribute("tag")}`).play();
    });
});

document.addEventListener("keydown", (event) => {
    if (event.code == "KeyW") {
        new Audio(`/Drum Kit Starting Files/sounds/crash.mp3`).play();
    } 
    else if (event.code == "KeyA") {
        new Audio(`/Drum Kit Starting Files/sounds/kick-bass.mp3`).play();
    } 
    else if (event.code == "KeyS") {
        new Audio(`/Drum Kit Starting Files/sounds/snare.mp3`).play();
    } 
    else if (event.code == "KeyD") {
        new Audio(`/Drum Kit Starting Files/sounds/tom-1.mp3`).play();
    }
    else if (event.code == "KeyJ") {
        new Audio(`/Drum Kit Starting Files/sounds/tom-2.mp3`).play();
    } 
    else if (event.code == "KeyK") {
        new Audio(`/Drum Kit Starting Files/sounds/tom-3.mp3`).play();
    } 
    else if (event.code == "KeyL") {
        new Audio(`/Drum Kit Starting Files/sounds/tom-4.mp3`).play();
    }
});