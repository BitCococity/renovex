// script.js
// Lógica básica del formulario de presupuesto.
// Esta versión muestra un mensaje de confirmación
// cuando el usuario envía el formulario.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("presupuestoForm");
  const resultado = document.getElementById("resultado");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Muestra el mensaje de agradecimiento
      resultado.classList.remove("hidden");

      // Limpia el formulario
      form.reset();

      // En el futuro aquí conectaremos un backend
      // o servicio como Formspree o EmailJS
      // para enviar la solicitud a hellorenovex@gmail.com
    });
  }
});
