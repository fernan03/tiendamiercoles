/*
// Entrada de problema
let nombreProducto ="batimovil"
let precioProducto ="400000"
let pesoProducto = 18.5
let tieneDescuento = true
let descripcionProducto ="Batimovil a escala"
let telefonoVendedor ="1234567"

const NOMBRE_CLIENTE="Luis"

// Arreglos unidemencionales
// Sirven para almacenar varios elementos en una sola variables
let productos=["batimovil","camiseta","gorra","bati morral"]
let productos2=Array("batimovil","camiseta","gorra","bati morral")


//Salidas
console.log("Buenas tardes")
console.log(nombreProducto)
console.log("Su nombre es: "+NOMBRE_CLIENTE+ " y su producto es: "+nombreProducto)
console.log(`Su nombre es: ${NOMBRE_CLIENTE} y su producto es: ${nombreProducto}`)
console.log("************")
console.log(productos)
console.log(productos2[2])
console.log(productos2[3])
console.log(productos2[1])
*/


/*
//controlando etiquetas

//1. Crear una varible para guardar una etiqueta
let etiquetaTitulo = document.getElementById("titulo")
let etiquetaMenu = document.getElementById("PeakyBlinders")
console.log(etiquetaTitulo)
console.log(etiquetaMenu)


//Como modificar una etiqueta
etiquetaTitulo.textContent = "Rojo vos no existis"
etiquetaMenu.textContent = "PeakyBlinders"

//Controlando una imagen
let etiquetafoto = document.getElementById("fototommy")
etiquetafoto.src="img/tommy3.jpg"

//Cambiar el estilo de a etiqueta
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")
*/

//Tienda
  let productosNombre=["batimovil","camiseta batman"]
  let productosPrecio=[200000,100000]
  let productosPromocion=[true,false]

  console.log(productosNombre)


  //Creando objetos con js

  let usuario={
      nombre:"luis",
      edad:48,
      amigos:["gatubela","mr frio","el pinguino"]
  }

  console.log(usuario)
  console.log(usuario.nombre)
  console.log(usuario.amigos[1])

