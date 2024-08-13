const dropdown = document.querySelector(".dropdown");
const select = document.querySelector(".select");
const caret = document.querySelector(".caret");
const section = document.querySelector("section");

select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    section.classList.toggle("menu-open")
})