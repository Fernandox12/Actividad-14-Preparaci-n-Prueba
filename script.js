// Requisito 1: Cambiar la imagen del mapa al hacer clic en "Nuevos Eventos"
function cambiarMapa() {
    let mapaImg = document.getElementById("mapa");
    mapaImg.src = "img/mapa-2.png"; 
}

// Requisito 2: Sumar asistentes dinámicamente usando Number()
function sumarAsistentes(idContador) {
    let spanAsistentes = document.getElementById(idContador);
    let valorActual = Number(spanAsistentes.innerText);
    spanAsistentes.innerText = valorActual + 1;
}

// Requisito 3: Mostrar alerta al hacer clic en "Crear Evento"
function crearEvento() {
    alert("Evento creado!");
}

// Extra: Funcionalidad del buscador
function buscarEvento() {
    let textoBusqueda = document.getElementById("busqueda").value;
    
    if (textoBusqueda.trim() === "") {
        alert("Por favor, escribe algo para buscar.");
    } else {
        alert("Buscando: " + textoBusqueda);
    }
}