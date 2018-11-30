var rev = [];
var puntero = 0;

function validar() {
    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;
    let cuit = document.getElementById("txtCuit").value;
    if (nombre === "") {
        alert('Ingrese Nombre nuevamente');
        return false;
    }
    if (apellido === "") {
        alert('Ingrese Apellido nuevamente');
        return false;
    }
    if (cuit === ""){
      alert("Ingrese CUIT nuevamente");
      return false;
    }
  return true;
}

function reiniciar(){
  document.getElementById("txtNombre").value = "";
  document.getElementById("txtApellido").value = "";
  document.getElementById("txtCuit").value = "";
  document.getElementById("ltsProductos").value = 0;
  document.getElementById('cantArticulos').value = 0;
  document.getElementById('depSi').checked;
  document.getElementById('chkCliente').checked;
}

// --------------------------------------------//

function registrar() {
    if (validar()) {
      let nombre = document.getElementById('txtNombre').value;
      let apellido = document.getElementById('txtApellido').value;
      let cuit = document.getElementById('txtCuit').value;
      let productos = document.getElementById('ltsProductos').selectedIndex;
      let cantidad = document.getElementById('cantArticulos').value;
      let dependencia = document.getElementById('depSi').checked;
      let cliente = document.getElementById('chkCliente').checked
      let nRev = new Revendedor(nombre, apellido, cuit, productos, cantidad, dependencia, cliente);
      rev[puntero] = nRev;
      puntero++;
      mostrar();
    }
}

function mostrar() {
  let tabla = document.getElementById("tblRevRegistrados");
  while (tabla.rows.length > 2){
    tabla.deleteRow(2)
  }
  for (var i = 0; i < rev.length; i++) {
    let tr = tabla.insertRow();
    tr.insertCell().innerText = rev[i].nombre;
    tr.insertCell().innerText = rev[i].apellido;
    tr.insertCell().innerText = rev[i].cuit;
    tr.insertCell().innerText = rev[i].toStringProducto();
    tr.insertCell().innerText = rev[i].cantidad;
    tr.insertCell().innerText = rev[i].toStringDependencia();
    tr.insertCell().innerText = rev[i].toStringCliente();
  }
  reiniciar();
}
