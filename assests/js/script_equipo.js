console.log("Cliente ingresó a la página de equipo médico")

// Seleccionar la sección donde se mostrarán los doctores
const listaDoctores = document.getElementById("lista-doctores");
const filtroInput = document.getElementById("filtro");
const criterioSelect = document.getElementById("criterio");
const buscarBtn = document.getElementById("buscar");

// Variable para almacenar los datos cargados
let doctores = [];

// Cargar el archivo JSON
fetch("assests/json/doctores.json")
        .then(response => {
          if (!response.ok) {
             throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
            doctores = data;
            mostrarDoctores(doctores); // Mostrar todos los doctores al cargar la página
        })
        .catch(error => {
            console.error("Error al cargar el archivo JSON:", error);
        });
    
    // Función para mostrar doctores en el DOM
    function mostrarDoctores(lista) {
        listaDoctores.innerHTML = ""; // Limpiar la lista
        lista.forEach(doctor => {
            const article = document.createElement("article");
    
            const titulo = document.createElement("h3");
            titulo.textContent = doctor.nombre;
    
            const imagen = document.createElement("img");
            imagen.src = doctor.imagen;
            imagen.alt = doctor.nombre;
            imagen.width = 150;
    
            const descripcion = document.createElement("p");
            descripcion.textContent = `${doctor.especialidad} - ${doctor.experiencia} años de experiencia - Disponibilidad ${doctor.disponibilidad}`;
    
            article.appendChild(titulo);
            article.appendChild(imagen);
            article.appendChild(descripcion);
    
            listaDoctores.appendChild(article);
        });
    }
    
    // Función para filtrar doctores según el criterio
    function filtrarDoctores() {
        const filtro = filtroInput.value.toLowerCase();
        const criterio = criterioSelect.value;
    
        const doctoresFiltrados = doctores.filter(doctor => {
            if (criterio === "nombre") {
                return doctor.nombre.toLowerCase().includes(filtro);
            } else if (criterio === "especialidad") {
                return doctor.especialidad.toLowerCase().includes(filtro);
            } else if (criterio === "experiencia") {
                return doctor.experiencia.toString().includes(filtro);
            }
            return false;
        });
    
        mostrarDoctores(doctoresFiltrados);
    }
    
    // Agregar evento al botón de buscar
    buscarBtn.addEventListener("click", filtrarDoctores);
