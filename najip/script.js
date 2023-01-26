let maxSlide = 10;
let startSlide = -2;
let curSlide = startSlide;
let delay = 1500;
const audio = document.getElementById("audio");
let slideMover = null;

function move() {
    curSlide++;
    moveSlide(curSlide);
}

function setMover(delay, callback) {
    return setInterval(() => {
        callback();
    }, delay);
}

function moveSlide(cur) {
    if (cur >= maxSlide) clearInterval(slideMover);
    const prev = document.getElementById("c" + (cur - 1));
    const next = document.getElementById("c" + cur);
    prev ? (prev.style.display = "none") : console.log("begin");
    next ? (next.style.display = "block") : console.log("end");
}

document.addEventListener("DOMContentLoaded", function () {
    if (audio.readyState >= 3) {
        audio.play();
        console.log(audio.readyState);
        slideMover = setMover(delay, () => {
            if (curSlide >= 0) {
                delay = 5000;
                clearInterval(slideMover);
                slideMover = setMover(delay, () => {
                    if (curSlide >= 9) {
                        delay = 10000;
                        clearInterval(slideMover);
                        slideMover = setMover(delay, move);
                    }
                    move();
                });
            }
            move();
        });
    }
});
