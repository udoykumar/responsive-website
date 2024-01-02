let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x");
let menu = document.querySelector(".navbar-menu");



openBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hiden");
});

closeBtn.addEventListener("click", () => {
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hiden");
});
