
// const app = document.getElementById("app")


// app.innerHTML = `<h2> Buenas que tal </h2>
//                 <p>todo bien </p>
//                 `


// const lista = document.getElementById("lista")
// lista.innerHTML = `<li> `


// const frutas = ["Annana", "Pera", "Manzana"]

// const cargarDom = () => {

//     const titulo = document.getElementById("titulo")
//     titulo.innerHTML = "Nuevo titulo"

//     const listado = document.getElementById("listado")
//     frutas.forEach((fruta) => {

//         const elementoDeLista = document.createElement("li")
//         elementoDeLista.innerText = fruta
//         listado.append(elementoDeLista)

//     }
//     )


// }

// cargarDom()



let catalogo = JSON.parse(localStorage.getItem("catalogo")) || []



const cargarCatalogo = () => {

    const contenedor = document.getElementById("app-aside")
    
    catalogo.forEach((producto) => {
        
        const nuevoDiv = document.createElement("div")
        nuevoDiv.classList = "contenedor"
        nuevoDiv.innerHTML = 
                            `
                            <h3> ${producto.tipoDePrenda} </h3> 
                            <p> Marca : ${producto.marca}</p>
                            <p> Cantidad : ${producto.cantidad}</p>
                            <p> Talle : ${producto.talle}</p>
                            <button type="button" id="eliminiar">Eliminar</button>
                            <button type="button" id="añadirAlCarro">Añadir al Carrito</button>
                            `

        contenedor.append(nuevoDiv)                           
    })
}

cargarCatalogo()



const crearCatalogo = document.querySelector("#crear-catalogo")

crearCatalogo.addEventListener("submit", (e) => {

    e.preventDefault()

    const id = crypto.randomUUID()
    const marca = e.target.children["marca"].value
    const tipoDePrenda = e.target.children["tipo-de-prenda"].value
    const cantidad = e.target.children["cantidad"].value
    const talle = e.target.children["talle"].value
    const producto = {id,marca,tipoDePrenda,cantidad,talle}
    catalogo.push(producto)
    localStorage.setItem("catalogo",JSON.stringify(catalogo))
    const contenedor = document.getElementById("app-aside")

    const nuevoDiv = document.createElement("div")
    nuevoDiv.classList = "contenedor"
    nuevoDiv.innerHTML = 
                        `
                            <h3> ${producto.tipoDePrenda} </h3> 
                            <p> Marca : ${producto.marca}</p>
                            <p> Cantidad : ${producto.cantidad}</p>
                            <p> Talle : ${producto.talle}</p>
                            <button id="eliminar">Eliminar</button>
                            <button id="añadirAlCarro">Añadir al Carrito</button>
                        `

    contenedor.append(nuevoDiv)
    crearCatalogo.reset()
    
})

const borrarCatalogo = (id) => {
    
    catalogo = catalogo.filter(prenda => prenda.id != id)
    localStorage.setItem("catalogo",JSON.stringify(catalogo))

}

borrarCatalogo()





//Borrador//


// const cargarDomDiv = () => {

//     const titulo = document.getElementById("titulo")
//     titulo.innerHTML = "Nuevo titulo"

//     const tarjetas = document.getElementById("tarjetas")

//     cartas.forEach((carta) => {

//         const elementoDeLista = document.createElement("div")
//         elementoDeLista.classList = "contenedor"
//         elementoDeLista.innerHTML = `<h3>DATOS</h3>
//                                     <ul> 
//                                         <li> ${carta.nombre} </li>
//                                         <li> ${carta.id} </li>
//                                     </ul>
                                    
//                                     `
//         tarjetas.append(elementoDeLista)
//     })
// }

// cargarDomDiv()

