// // // Eliminar de Local Storage
// // localStorage.clear();


// // let elemento;

// // elemento = document;
// // elemento = document.all;
// // elemento = document.body;
// // elemento = document.images;

// // let imagenes = document.images;
// // let imagenesarr = Array.from(imagenes)

// // for (let img of imagenes) {
// //     // console.log(img)
// // }


// // /* seleccionando elementos y aplicandoles propiedades */
// // let encabezado = document.getElementById("encabezado")
// // encabezado.style.background = "red"
// // encabezado.style.fontFamily = "times new roman"

// // encabezado.textContent = "los mejores cursos "
// // encabezado.style.textTransform = "capitalize"

// // // console.log(encabezado.innerText);


// // /* seleccionando un elemento en js con queryselector*/
// // /* nth-child(numero en donde se ubica el elemento a seleccionar)*/
// // let cabeza = document.querySelector("#principal a:nth-child(4)")


// // // console.log(cabeza)

// // /* seleccionando multiples elementos */

// // // let en = document.getElementsByClassName("enlace")[0, 1]

// // // en.style.color = "red"

// // // let listEnlaces = document.querySelector("#principal").getElementsByClassName("enlace")

// // // /* etiqueta para todos los elementos del html*/

// // // let links = document.getElementsByTagName("a")

// // // let enlaces = Array.from(links)
// // // for (let link of links) {
// // //     // console.log(link.innerHTML)
// // // }

// // ////////////////////////////////////////////
// // /*let enlances = document.querySelectorAll("img")
// // let enlac = Array.from(enlances)

// // enlances.forEach(function(images) {
// //     // console.log(images)
// // })
// // */

// // /* traversing */

// // let navegacion = document.querySelector("#principal")

// // /* pero otra forma seria */
// // // console.log(navegacion.children)

// // // /* padre e hijo traversing */

// // let cursos = document.querySelectorAll(".card")

// // // console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = "xd!!!!!!!!!!!!!!!")

// // let nav = document.getElementById("secundaria")
// // let elementos = document.createElement("a")

// // elementos.className = "enlace" /* agregar clase */
// // elementos.setAttribute("href", "#")
// // nav.appendChild(elementos)
// // elementos.innerHTML = "Mis Cursos"
// //     // console.log(elementos)

// // let listCursos = document.getElementById("lista-cursos")
// // let nuevoEncabezado = document.createElement("h2")

// // nuevoEncabezado.id = "encabezado";
// // listCursos.appendChild(nuevoEncabezado)
// // nuevoEncabezado.innerText = "xdddddddd"


// // /*reemplzar un elemnto desde el dom*/

// // let encabezados = document.getElementById("encabezado")
// // console.log(encabezados)
// // encabezados.replaceChild(nuevoEncabezado, encabezados.childNodes[0])

// // /* quitar y agregar clases*/

// // let enlaces = document.querySelectorAll(".enlace")
// // let navegador = document.querySelector("#principal");


// // let li;

// // li = navegador.className;
// // // console.log(li);

// /* eventos click */

// /*let btn = document.querySelector("#submit-buscador")
// btn.addEventListener("click", pulsar);

// function pulsar(e) {
//     e.preventDefault(); /*  detiene el envio de algo */
// // console.log("distes click")

// // console.log(btn)*/


// /* otros eventos con el mouse */

// /*let encabezado = document.querySelector("#encabezado")
// let enlaces = document.querySelectorAll(".enlace")
// let boton = document.querySelector("#vaciar-carrito")*/

// /*boton.addEventListener("click", Mostrar)*/
// // boton.addEventListener("dbclick", Mostrar)
// // boton.addEventListener("mouseenter", Mostrar)
// // boton.addEventListener("mouseleave", Mostrar)
// // boton.addEventListener("mouseover", Mostrar)
// // boton.addEventListener("mouseout", Mostrar)
// // boton.addEventListener("mousedown", Mostrar)
// // boton.addEventListener("mouseup", Mostrar)

// /*function Mostrar(e) {

//     console.log("eventos: " + e.type)

// }*/


// /* evntos para los inputs */

// /*let buscador = document.querySelector("#buscador")

// buscador.addEventListener("blur", obtenerEventos) /* validar formularios con blur */

// /*function obtenerEventos(e) {
//     console.log("eventos: " + e.type)
// }*/

// /* evento bubling detiene los eventos*/

// /*let card = document.querySelector(".card")

// let infoCurso = document.querySelector(".info-card")
// let agregarCarrito = document.querySelector(".agregar-carrito")

// card.addEventListener("click", (e) => {
//     console.log("click en card")
//     e.stopPropagation();
// })

// infoCurso.addEventListener("click", (e) => {
//     console.log("click en info curso")
//     e.stopPropagation();
// })

// agregarCarrito.addEventListener("click", (e) => {
//     console.log("click en agregar carrito")
//     e.stopPropagation();
// })*/

// /*delegation js*/
// let listaCarrito = document.querySelector("#lista-carrito").children[1]

// document.body.addEventListener("click", agregarCarrito);
// listaCarrito.addEventListener("click", eliminarElemento);
// //permite  escuchar los eventos del cuerpo
// function eliminarElemento(e) {
//     e.preventDefault();
//     console.log(listaCarrito.querySelector("tr").remove())
//         //if (e.target.classList.contains("borrar-curso")) {
//         //      console.log(e.target.parentElement.parentElement.remove())
//         //}

// }

// function agregarCarrito(e) {
//     e.preventDefault();
//     /* agregar boton con clases */
//     if (e.target.classList.contains("agregar-carrito")) {
//         console.log("agregar carrito")
//     }
// }
let carrito = document.getElementById("carrito")
let listaCursos = document.getElementById("lista-cursos");
let listaCarrito = document.querySelector("#lista-carrito tbody")
let vaciarCarrito = document.getElementById("vaciar-carrito")
console.log(listaCarrito)
console.log(listaCursos)


listaCursos.addEventListener("click", cargarCurso);
carrito.addEventListener("click", eliminarCurso);
vaciarCarrito.addEventListener("click", borrarCarrito);

function cargarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains("agregar-carrito")) {
        let curso = e.target.parentElement.parentElement;
        console.log(curso)

        leerDatos(curso)
    }
}
let nuevo = [];

function leerDatos(curso) {
    let infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id")

    }
    console.log(infoCurso)

    enviarDatos(infoCurso);
}

function enviarDatos(curso) {

    let columna = document.createElement("tr");
    columna.innerHTML = `
<td><img src="${curso.imagen}" width="100px"></td>
<td>${curso.titulo}</td>
<td>${curso.precio}</td>
<td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
`
    listaCarrito.appendChild(columna)
    convertir(curso);


}

function eliminarCurso(e) {
    e.preventDefault();
    let curso, cursoId;
    if (e.target.classList.contains("borrar-curso")) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector("a").getAttribute("data-id")
        console.log(cursoId)


    }
    eliminarLocalStorage(cursoId);
}

function borrarCarrito(e) {
    e.preventDefault();
    if (e.target.classList.contains("button")) {
        let btnBorrar = e.target.parentElement.children[1].children[1].remove();
        console.log(btnBorrar)
    }
    vaciarLocalStorage();
}


function agregarLocalStorage(nuevo) {
    //  let array = Object.values(curso);
    //console.log(array
    let ingresar = localStorage.setItem("cursos", JSON.stringify(nuevo))

}

function convertir(curso) {

    if (curso) {
        nuevo.push(curso)
    }

    agregarLocalStorage(nuevo)
}


function mostrarLocalStorage() {
    let nuevo = localStorage.getItem("cursos")
    let mostrarArrayLocal = JSON.parse(nuevo);
    console.log(mostrarArrayLocal)

    mostrarArrayLocal.forEach(function(curso) {


        let columna = document.createElement("tr");
        columna.innerHTML = `
<td><img src="${curso.imagen}" width="100px"></td>
<td>${curso.titulo}</td>
<td>${curso.precio}</td>
<td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
`
        listaCarrito.appendChild(columna)

    });

}
mostrarLocalStorage();


function eliminarLocalStorage(curso) {

    let nuevo = localStorage.getItem("cursos")
    let mostrarArrayLocal = JSON.parse(nuevo);


    mostrarArrayLocal.forEach(function(mostrar, index) {
        if (mostrar.id === curso) {

            mostrarArrayLocal.splice(index, 1)

        }
    })

    console.log(mostrarArrayLocal)
    localStorage.setItem("cursos", JSON.stringify(mostrarArrayLocal))
}
//eliminarLocalStorage();

function vaciarLocalStorage() {
    let ver = localStorage.removeItem("cursos")
    let borrar = JSON.parse(ver);

    console.log("eliminado" + borrar)

}