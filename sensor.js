const buttons = document.querySelectorAll(".destino, .importe");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("presionado");
    });
});