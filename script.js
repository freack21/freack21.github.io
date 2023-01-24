const meJson = `
"Fikri Rivandi": {
    "Nickname": "Freeact",
    "Gender": "Male",
    "Age": 19,
    "Hobby": "Coding and Gaming",
    "Country": "ID-id, Indonesia"
}
`;
document.querySelector(".json-me code").innerText = meJson;

function auto_grow(element) {
    element.style.height = "16px";
    element.style.height = element.scrollHeight + "px";
}

let nav = document.querySelectorAll(".nav-link");

nav.forEach((n) => {
    n.onclick = () => {
        nav.forEach((l) => {
            l.classList.remove("active");
        });
        n.classList.add("active");
    };
});

const scriptURL =
    "https://script.google.com/macros/s/AKfycbz0_l8FXu380-NJ1rjYUvS3bXvcZydePWRNhyR_8qzNQhTGCdg6et-6EFcA8RuLCj-49A/exec";
const form = document.forms["contact-form"];
const sendBtn = document.getElementById("send-btn");
const defSendBtnText = sendBtn.innerHTML;
// const notif = document.getElementById("notif");

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
    sendBtn.style.backgroundColor = color;
    sendBtn.innerText = msg;

    // if (sendBtn.style.display == "block") {
    //     setTimeout(() => {
    //         sendBtn.innerText = "Send";
    //         sendBtn.style.backgroundColor = "orangered";
    //     }, 5000);
    // }
    setTimeout(() => {
        sendBtn.innerHTML = defSendBtnText;
        sendBtn.style.backgroundColor = "orangered";
    }, 5000);
}
