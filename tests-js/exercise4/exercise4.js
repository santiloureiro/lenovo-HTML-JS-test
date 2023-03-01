const button = document.querySelector("#counter-button")
const counterHTML = document.querySelector("#counter")
let counter = 0

button.addEventListener("click", () => {
    counterHTML.innerHTML = `Counter: ${counter+=1}`
})