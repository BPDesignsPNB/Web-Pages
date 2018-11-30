class Revendedor{

  constructor(nombre, apellido, cuit, producto, cantidad, dependencia, cliente){
    this.nombre = nombre;
    this.apellido = apellido;
    this.cuit = cuit;
    this.producto = producto;
    this.cantidad = cantidad;
    this.dependencia = dependencia;
    this.cliente = cliente;
  }

  toStringDependencia(){
    return this.dependencia ? "Si" : "No";
  }

  toStringCliente(){
    return this.cliente ? "Si" : "No";
  }

  toStringProducto(){
    switch (this.producto){
      case 0:return "Varios";
        break;
      case 1:return "Auriculares";
        break;
      case 2:return "Televisores";
        break;
      case 3:return "Consolas";
        break;
      case 4:return "Smartphones";
        break;
      case 5:return "Tablets";
        break;
      default:return "No seleccionado";
        break;
    }
  }

  toString() {
      return this.nombre + "  " + this.apellido + " " + this.cuit + " " +
       toStringProducto() + " " + this.cantUni + " " + toLocaleString()
       + " " + toStringCliente() ;
  }

}
