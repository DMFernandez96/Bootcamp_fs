document.addEventListener("DOMContentLoaded", () => {
  const style1Button = document.getElementById("style1Button");
  const highContrastButton = document.getElementById("highContrastButton");
  const body = document.body;

  /*
		Aplica el estilo claro
		eliminando la clase de alto contraste
		y agregando la clase default-style
	*/
  function applyStyle1() {
    body.classList.remove("high-contrast");
    body.classList.add("default-style");
  }

  /*
		Aplica alto contraste
		eliminando la clase de estilo claro
		y agregando la clase high-contrast
	*/
  function applyHighContrast() {
    body.classList.remove("default-style");
    body.classList.add("high-contrast");
  }

  style1Button.addEventListener("click", applyStyle1);
  highContrastButton.addEventListener("click", applyHighContrast);
});
