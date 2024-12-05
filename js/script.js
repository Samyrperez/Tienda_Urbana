const form = document.querySelector("form"),
      button = document.querySelector("#submit"), // Seleccionamos el botón por su ID
      allInputs = document.querySelectorAll("input"); // Seleccionamos todos los inputs dentro del formulario

form.addEventListener("submit", (e) => {
    // Prevenir el envío del formulario para hacer la validación
    e.preventDefault();
    
    let isValid = true; // Variable para verificar si todos los campos son válidos

    // Recorrer todos los inputs y verificar si están vacíos
    allInputs.forEach(input => {
        if (input.value.trim() === "") {
            alert("Diligencie todos los campos"); // Si algún campo está vacío, mostrar alerta
            isValid = false;
        }
    });

    // Si todos los campos son válidos, mostrar el mensaje de éxito
    if (isValid) {
        alert("Registro exitoso");
        form.submit(); // Aquí se puede hacer el envío del formulario si todo es válido
    }
});
