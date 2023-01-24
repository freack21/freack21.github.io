let maxSlide = 13;
let startSlide = 1;
let curSlide = 1;
const slideMover = setInterval(() => {
    curSlide++;
    moveSlide(curSlide);
}, 5000);

function moveSlide(cur) {
    if (cur >= maxSlide) clearInterval(slideMover);
    const prev = document.getElementById("c" + (cur - 1));
    const next = document.getElementById("c" + cur);
    prev ? (prev.style.display = "none") : console.log("begin");
    next ? (next.style.display = "block") : console.log("end");
}
