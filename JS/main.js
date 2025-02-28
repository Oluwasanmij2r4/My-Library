const popBtn = document.querySelector(".addbtn")
const popUp = document.querySelector("form")
const cancel = document.querySelector(".cancel")

popBtn.addEventListener("click", () => {
    popUp.classList.add('active')
    popUp.classList.add('blur');
});

cancel.addEventListener("click", () => {
    popUp.classList.remove('active')
})