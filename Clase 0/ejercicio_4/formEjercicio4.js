document.addEventListener("DOMContentLoaded", () => {
  const style1Button = document.getElementById("style1Button");
  const highContrastButton = document.getElementById("highContrastButton");
  const birthDateInput = document.getElementById("birthDate");
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

  //fecha actual
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  //fecha mínima para que sea mayor de 18 años
  const minAdultAgeDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );

  //fecha máxima para seleccionar es "hoy"
  birthDateInput.max = today.toISOString().split("T")[0];
  birthDateInput.min = "1900-01-01";

  birthDateInput.addEventListener("change", function () {
    const inputDate = new Date(this.value);
    //si se ingresa una fecha posterior a la de edad minima
    if (inputDate > minAdultAgeDate) {
      alert("Debes ser mayor a 18 años");
      this.value = ""; // limpia el campo de entrada si la fecha es erronea
    }
  });
});
