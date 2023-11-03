function agregarFila(event) {
    event.preventDefault(); 

    const gustosInput = document.getElementById("gustos");
    const grillaBody = document.querySelector("#grilla tbody");

    
    const nuevoGusto = gustosInput.value;

    if (nuevoGusto) {
       
        const newRow = grillaBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.innerHTML = nuevoGusto;
        
        cell2.innerHTML = '<input type="text" name="porcentaje" value="0" size="5" maxlength="5" disabled />';
        cell3.innerHTML = '<button onclick="editarFila(this)">Editar</button>';

     
        gustosInput.value = " ";
    }
}

function editarFila(btn) {
   
    const row = btn.parentElement.parentElement;
    const nombre = row.cells[0];
    const porcentaje = row.cells[1].querySelector('input');

    
    const oldNombre = nombre.innerHTML;
    const oldPorcentaje = porcentaje.value;

   
    nombre.innerHTML = `<input type="text" value="${oldNombre}" />`;
    porcentaje.removeAttribute('disabled');

   
    btn.parentElement.innerHTML = `
        En edición.
    `;

     
    mostrarMensajeConBotones(oldNombre, oldPorcentaje, row.rowIndex);

}

function mostrarMensajeConBotones(oldNombre, oldPorcentaje, index) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.innerHTML = `
        Pulse Aceptar para guardar los cambios, pulse Cancelar para anularlos.
        <button type="button" onclick="guardarCambios(${index})">Aceptar</button>
        <button type="button" onclick="cancelarCambios('${oldNombre}', '${oldPorcentaje}', ${index})">Cancelar</button>
    `;
    mensajeDiv.style.display = 'block';
}



function mostrarMensaje(mensaje) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.display = 'block';
}

function ocultarMensaje() {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.style.display = 'none';
}

function restaurarBotonesEditar() {
    const botonesEditar = document.querySelectorAll('button[onclick^="editarFila"]');
    botonesEditar.forEach(btn => {
        btn.parentElement.innerHTML = '<button type="button" onclick="editarFila(this)">Editar</button>';
    });
}

function guardarCambios(idx) {
        
    const row = document.getElementById('grilla').rows[idx];
    const nombre = row.cells[0].querySelector('input');
    const porcentaje = row.cells[1].querySelector('input');
    row.cells[2].innerHTML = '<button type="button" onclick="editarFila(this)">Editar</button>';
   
    row.cells[0].innerHTML = nombre.value;
    porcentaje.setAttribute('disabled', '');


    ocultarMensaje();
}

function cancelarCambios(oldNombre, oldPorcentaje, idx) {
   
    const row = document.getElementById('grilla').rows[idx];
    const nombre = row.cells[0];
    const porcentaje = row.cells[1].querySelector('input');
    
    
    nombre.innerHTML = oldNombre;
    row.cells[2].innerHTML = '<button type="button" onclick="editarFila(this)">Editar</button>';
    porcentaje.value = oldPorcentaje;
    porcentaje.setAttribute('disabled', '');


    ocultarMensaje();
}


document.getElementById("agregarFila").addEventListener("click", agregarFila);


const form = document.getElementById("form");




form.addEventListener("submit", function (event) {

    const table = document.getElementById("grilla");

    
    const rows = table.querySelectorAll("tbody tr");

    let maxPorcentaje = 0;
    let maxGusto = "";

    
    rows.forEach(function (row) {
        const porcentaje = parseFloat(row.cells[1].textContent); // Obtén el porcentaje de la segunda celda

        if (porcentaje > maxPorcentaje) {
            maxPorcentaje = porcentaje;
            maxGusto = row.cells[0].textContent; // Obtén el gusto de la primera celda
        }
    });

    
    document.getElementById("maxPorcentaje").value = maxPorcentaje;
    document.getElementById("maxGusto") = maxGusto;

  
});