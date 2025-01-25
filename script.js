const meJson = `
  "Fikri Rivandi": {
    "nickname": ["freack21", "Fundayyy"],
    "gender": "Male",
    "status": "Student",
  }`;
document.querySelector(".json-me code").innerText = meJson;

let nav = document.querySelectorAll(".nav-link");
nav.forEach((n) => {
  n.onclick = (e) => {
    if (e.target.href.includes("html")) return;
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
  const body = new FormData(form);
  let text = "*KONTAK PORTFOLIO*\n";
  for (const data of body.entries()) {
    text += `\n*${data[0]}:*\n    ${data[1]}\n`;
  }
  text = text.trim();
  sendBtn.innerHTML = `<i class="fa-solid fa-spinner"></i> Sending...`;
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(async (response) => {
      Notify("rgba(0, 128, 0, 0.8)", "Sent successfully", true);
    })
    .catch((error) => {
      Notify("rgba(255, 0, 0, 0.8)", "Failed to send message", false);
    });
});

function Notify(color, msg, isSuccess) {
  form.reset();
  sendBtn.disabled = true;
  sendBtn.style.backgroundColor = color;
  if (isSuccess)
    sendBtn.innerHTML = `<i class="fa-regular fa-thumbs-up"></i> ${msg}`;
  else
    sendBtn.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${msg}`;
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
