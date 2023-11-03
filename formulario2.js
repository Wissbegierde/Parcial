document.addEventListener("DOMContentLoaded", function() {
    // Obtiene una referencia al elemento "resultados" en "formulario2.html"
    const resultados = document.getElementById("resultados");

    // Obtiene los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);

    // Recupera los valores de los parámetros de la URL
    const nombre = urlParams.get("nombre");
    const email = urlParams.get("email");
    const numero = urlParams.get("numero");
    const maxGusto = urlParams.get("maxGusto");
    const maxPorcentaje = urlParams.get("maxPorcentaje");

    // Muestra los datos en la página
    document.getElementById("nombre").textContent = nombre;
    document.getElementById("email").textContent = email;
    document.getElementById("numero").textContent = numero;
    document.getElementById("maxGusto").textContent = maxGusto;
    document.getElementById("maxPorcentaje").textContent = maxPorcentaje;
});