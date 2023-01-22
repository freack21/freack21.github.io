let nav = document.querySelectorAll(".nav-link");

nav.forEach((n) => {
    n.onclick = () => {
        nav.forEach((l) => {
            l.classList.remove("active");
        });
        n.classList.add("active");
    };
});
