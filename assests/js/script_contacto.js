
console.log("Cliente ingresó a la página de contacto")

//validacion
//let emailValido = email.includes("@");
//let telefonoValido = typeof Number(telefono) === "number" && !isNaN(Number(telefono));

let nombre = prompt("Ingrese su nombre");
let email = prompt("Ingrese su email");

// Función para validar un número de teléfono
function validarTelefono(telefono) {
    try {
        // Verificar que el teléfono no esté vacío
        if (!telefono) {
            throw new Error("El número de teléfono no puede estar vacío.");
        }

        // Validar que el teléfono solo contenga números y tenga 10 dígitos
        const regexTelefono = /^[0-9]{10}$/;
        if (!regexTelefono.test(telefono)) {
            throw new Error("El número de teléfono debe contener exactamente 10 dígitos.");
        }

        console.log("Número de teléfono válido:", telefono);
        alert("Número de teléfono válido: " + telefono);
    } catch (error) {
        // Capturar errores y mostrarlos en la consola
        console.error("Error en la validación del teléfono:", error.message);
        alert("Error: " + error.message);
    }
}

// Solicitar el teléfono al usuario y validarlo
const telefonoIngresado = prompt("Por favor, ingresa tu número de teléfono (10 dígitos):");
validarTelefono(telefonoIngresado);



//mostrar en la consola
console.log(`Nombre: ${nombre}`);
console.log(`Email: ${email}`);

//mostrar alert al usuario
alert(`Hola ${nombre}, tu email es ${email} y tu teléfono es ${telefonoIngresado}`);
