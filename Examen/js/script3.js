let item = 0;

function agregar() {

    item++;
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");
    let sexo = "a";
    let nombre = document.getElementById('nombre').value;

    if (document.getElementById('hombre').checked) {
        sexo = "hombre";

    } else {
        sexo = "mujer";

    }

    var ciclo = document.getElementById('ciclo').value;
    var e_p = document.getElementById('escuela').value;
    var ep = "";
    if (e_p == 1) {
        ep = "Sistemas";

    } else if (e_p == 2) { ep = "Alimentos"; }
    else if (e_p == 3) { ep = "Ambiental"; }
    else if (e_p == 4) { ep = "Arquitectura"; }
    else if (e_p == 5) { ep = "Civil"; }
    else { ep = "nada" }



    var fil = document.createElement("tr");
    var celda_item = document.createElement("td");
    var celda_nombre = document.createElement("td")
    var celda_sexo = document.createElement("td");
    var celda_ciclo = document.createElement("td");
    var celda_ep = document.createElement("td");


    //celda editar
    var celda_editar = document.createElement("td");
    celda_editar.innerHTML = "<a href='#' class='icono' onclick='editar(this)'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>";

    //celda de accion eliminar
    var celda_eliminar = document.createElement("td");
    celda_eliminar.innerHTML = "<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>";

    celda_sexo.innerHTML = sexo;
    celda_item.innerHTML = item;
    celda_nombre.innerHTML = nombre;
    celda_ciclo.innerHTML = ciclo;
    celda_ep.innerHTML = ep;

    fil.appendChild(celda_item);
    fil.appendChild(celda_nombre);
    fil.appendChild(celda_sexo);
    fil.appendChild(celda_ciclo);
    fil.appendChild(celda_ep);
    fil.appendChild(celda_editar);
    fil.appendChild(celda_eliminar);

    tbody.appendChild(fil);
    table.appendChild(tbody);


}


function limpiar() {
    nombre.value = "";
    nombre.focus();
}
function editar(row) {
    fila = row.parentNode.parentNode;
    nombre.value = fila.cells[0].innerHTML;
    est = 1;
}
function eliminar(row) {
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}