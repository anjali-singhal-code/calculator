let buttons = Array.from(document.querySelectorAll(".button"));
let display = document.querySelector("#display");
let input = "";
let equal = document.querySelector("#equals");
let clear = document.querySelector("#clear");
let backspace = document.querySelector("#backspace");
let toggleSign = document.querySelector("#toggle-sign")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    input += button.innerHTML
    display.value = input
  })
})

toggleSign.addEventListener("click", () => {
  input = input * -1;
  display.value = input;
})

equal.addEventListener("click", () => {
  input = eval(input);
  display.value = input;
  if (display.value === "0") {
    clearInput();
  }
})

clear.addEventListener("click", () => {
  input = "";
  display.value = "";
})

backspace.addEventListener("click", () => {
  input = input.substring(0, input.length - 1)
  display.value = input
})

function clearInput() {
  input = "";
  display.value = "0";
}
