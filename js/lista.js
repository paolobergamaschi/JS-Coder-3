const item = document.querySelector("#crearObjeto");
const nombreItem = document.querySelector("#nombreObjeto");
const colorItem = document.querySelector("#colorObjeto");
const precioItem = document.querySelector("#precioObjeto")
const cantidadItem = document.querySelector("#cantidadObjeto");

item.addEventListener("click", function(event){
    event.preventDefault();

const nombre = nombreItem.value;
const color = colorItem.value;
const precio = precioItem.value;
const cantidad = cantidadItem.value;

 
const objeto = new crearObjeto(nombre, color, precio, cantidad);
console.log(objeto);
if(nombreItem.value === ''){nombreObjeto.focus()}
else if(colorItem.value === ''){colorObjeto.focus()}
else if(isNaN(precioItem.value) || precioItem.value === ''){precioObjeto.focus()}
else if(isNaN(cantidadItem.value) || (cantidadItem.value === '')){cantidadObjeto.focus()}
else{
let nuevoObjeto = document.createElement("li")
const objCompleto = `Nombre: ${nombreItem.value}, Color:  ${colorItem.value}, Precio:  ${precioItem.value}, Existencias:  ${cantidadItem.value}`;
nuevoObjeto.innerText = objCompleto;
agregar.append(nuevoObjeto);
nombreItem.value = '';
colorItem.value = '';
precioItem.value = '';
cantidadItem.value = '';
}
}
);

function crearObjeto(nombre, color, precio, cantidad) {
    this.nombre = nombre;
    this.color = color;
    this.precio = precio;
    this.cantidad = cantidad;
}