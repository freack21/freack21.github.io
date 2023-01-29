const meJson = `
"Fikri Rivandi": {
    "Nickname": ["Freack21", "Freeact"],
    "Gender": "Male",
    "Status": "Student",
    "Hobby": ["Coding", "Gaming"],
    "Motto": "Don't Worry, Be Happy",
}
`;
document.querySelector(".json-me code").innerText = meJson;

let nav = document.querySelectorAll(".nav-link");
nav.forEach((n) => {
    n.onclick = (e) => {
        e.preventDefault();
        nav.forEach((l) => {
            l.classList.remove("active");
        });
        changePage(n.getAttribute("href"));
        n.classList.add("active");
    };
});

const scriptURL =
    "https://script.google.com/macros/s/AKfycbz0_l8FXu380-NJ1rjYUvS3bXvcZydePWRNhyR_8qzNQhTGCdg6et-6EFcA8RuLCj-49A/exec";
const form = document.forms["contact-form"];
const sendBtn = document.getElementById("send-btn");
const defSendBtnText = sendBtn.innerHTML;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendBtn.innerText = "Sending...";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            Notify("rgba(0, 128, 0, 0.8)", "Sent successfully!!");
        })
        .catch((error) => {
            Notify("rgba(255, 0, 0, 0.8)", "Failed to send message!!");
        });
});

function Notify(color, msg) {
    form.reset();
    sendBtn.disabled = true;
    sendBtn.style.backgroundColor = color;
    sendBtn.innerText = msg;
    setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.innerHTML = defSendBtnText;
        sendBtn.style.backgroundColor = "orangered";
    }, 5000);
}

function auto_grow(element) {
    element.style.height = "1rem";
    element.style.height = element.scrollHeight + "px";
}

function changePage(page) {
    let pages = document.querySelectorAll(".page");
    if (page == "#home") {
        pages.forEach((l) => (l.style.display = "block"));
        return;
    }
    pages.forEach((l) => (l.style.display = "none"));
    document.querySelector(page).style.display = "block";
}
