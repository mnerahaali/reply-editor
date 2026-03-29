const textarea = document.querySelector("textarea");

const buttons = document.querySelectorAll(".button-grid button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const text = button.innerText;

    textarea.value += text + "\n";
  });
});
