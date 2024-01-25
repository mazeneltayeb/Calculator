let buttons = document.querySelectorAll(".buttons div")
let display = document.querySelector(".cal-screen .output")
let input = document.querySelector(".input")
let resolve = ""
let operation = ""

let calc = (btnValue) => {
    if (btnValue === "=" || btnValue === "*" || btnValue === "/" || btnValue === "+" || btnValue === "-") {
        operation = eval(operation)
        resolve = operation
        display.innerHTML = resolve
    } if (btnValue === "AC") {
        operation = ""
    } if (btnValue === "Del") {
        operation = operation.toString().slice(0, -1)
    }
    if (btnValue !== "=" && btnValue !== "AC" && btnValue !== "Del") {
        operation += btnValue
    }
    display.innerHTML = operation
}
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calc(e.target.dataset.value))
})









































