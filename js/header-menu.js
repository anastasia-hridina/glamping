const toggle = document.querySelector('.menu-open-input');
const nav = document.querySelector('.nav-container');

toggle.addEventListener("change", overflowDisable);

function overflowDisable() {
    if (toggle.checked) {
        nav.classList.add('open');
        document.body.style.overflow = "hidden";
    } else {
        nav.classList.remove('open');
        document.body.style.overflow = "";
    }
}
