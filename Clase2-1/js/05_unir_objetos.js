const producto = {
    id:124,
    marca:"Dell",
    modelo: "Latitude 3521",
    precio: 1200000
}

//agregar objetos a un objeto

const itemCarrito = {
    cantidad: 10,
    producto
}

console.log(itemCarrito)
console.log(itemCarrito.producto.marca+" "+itemCarrito.producto.modelo)

const itemCarrito2 = {
    cantidad:10,
    ...producto //"..." operador tres puntos es para colocar lo que esta dentro del objeto no el objeto como tal
}

console.log(itemCarrito2)
