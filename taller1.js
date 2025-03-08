const prompt = require('prompt-sync')();

console.log("Hola! Vamos a calcular el valor de tu factura.");
let valorFactura = parseFloat(prompt("Por favor, ingresa el valor de la factura: "));

if (valorFactura > 50000) {
    console.log("¡El valor de tu factura es mayor a $50,000! Se aplicará un 15% de impuestos.");

    let impuestos = valorFactura * 0.15;

    let totalPagar = valorFactura + impuestos;

    console.log(`El valor de la factura con impuestos es: $${totalPagar.toFixed(2)}`);
} else {
    console.log("El valor de tu factura no supera los $50,000. No se aplican impuestos.");
    console.log(`El valor total a pagar es: $${valorFactura.toFixed(2)}`);
}


// // TALLER 2_____________________________________________

console.log("¡Hola! Vamos a verificar si eres mayor o menor de edad.");
let edad1 = parseInt(prompt("Por favor, ingresa tu edad en años: "));
if (edad1 >= 0) {
   if (edad1 >= 18) {
        console.log("Ohhh! Eres mayor de edad.");
    } else {
        console.log("Aún eres menor de edad.");
    }
} 

// TALLER __________________________________________________________________________
console.log("¡Hola! Vamos a determinar en qué etapa de la vida te encuentras.");
let edad = parseInt(prompt("Por favor, ingresa tu edad en años: "));
if (edad >= 0) {
    if (edad >= 0 && edad <= 9) {
        console.log("¡Eres un niño!");
    } else if (edad >= 10 && edad <= 17) {
        console.log("¡Eres un adolescente!");
    } else if (edad >= 18 && edad <= 40) {
        console.log("¡Eres un adulto!");
    } else if (edad >= 41 && edad <= 60) {
        console.log("¡Eres un adulto mayor!");
    } else {
        console.log("¡Eres un abuelo!");
    }
}

// TALLER 4__________________________________________________________________________________
function mostrarMenu() {
    console.log("\n¡Bienvenido a la calculadora! Por favor, elige una opción:");
    console.log("1: Sumar");
    console.log("2: Restar");
    console.log("3: Multiplicar");
    console.log("4: Dividir");
    console.log("5: Raíz Cuadrada");
    console.log("6: Salir");
}
function calculadora() {
    let opcion;

    do {
        mostrarMenu();
        opcion = parseInt(prompt("Ingresa el número de la opción que deseas: "));

        switch (opcion) {
            case 1: // Sumar
                let num1 = parseFloat(prompt("Ingresa el primer número: "));
                let num2 = parseFloat(prompt("Ingresa el segundo número: "));
                console.log(`El resultado de la suma es: ${num1 + num2}`);
                break;

            case 2: // Restar
                num1 = parseFloat(prompt("Ingresa el primer número: "));
                num2 = parseFloat(prompt("Ingresa el segundo número: "));
                console.log(`El resultado de la resta es: ${num1 - num2}`);
                break;

            case 3: // Multiplicar
                num1 = parseFloat(prompt("Ingresa el primer número: "));
                num2 = parseFloat(prompt("Ingresa el segundo número: "));
                console.log(`El resultado de la multiplicación es: ${num1 * num2}`);
                break;

            case 4: // Dividir
                num1 = parseFloat(prompt("Ingresa el primer número: "));
                num2 = parseFloat(prompt("Ingresa el segundo número: "));
                if (num2 !== 0) {
                    console.log(`El resultado de la división es: ${num1 / num2}`);
                } else {
                    console.log("Error: No se puede dividir entre cero.");
                }
                break;

            case 5: // Raíz Cuadrada
                let num = parseFloat(prompt("Ingresa un número para calcular su raíz cuadrada: "));
                if (num >= 0) {
                    console.log(`La raíz cuadrada de ${num} es: ${Math.sqrt(num)}`);
                } else {
                    console.log("Error: No se puede calcular la raíz cuadrada de un número negativo.");
                }
                break;

            case 6: // Salir
                console.log("¡Gracias por usar la calculadora! ¡Hasta luego! 😊");
                break;

            default:
                console.log("Opción inválida. Por favor, elige una opción del 1 al 6.");
                break;
        }
    } while (opcion !== 6); // Repetir hasta que el usuario elija salir
}
calculadora();

// // NO REALICE ESTE TRABAJO EN EL PUNTO 5 TA COMPLEJO


// // TALLER 6_____________________________________________________________________
function sumarHasta50() {
    let suma = 0; // Inicializamos la suma en 0

    console.log("¡Hola! Vamos a sumar números hasta alcanzar o superar 50.");
    while (suma < 50) {
        let numero = parseFloat(prompt("Ingresa un número: "));

        if (!isNaN(numero)) {
            suma += numero; // Sumamos el número ingresado
            console.log(`Suma actual: ${suma}`);
        }
    }
    console.log(`¡Felicidades! La suma total es: ${suma}. Has alcanzado o superado 50`);
}
sumarHasta50();


//taller 8_________________________________________________________________
//Clase Persona
class Persona {
    // Constructor
    constructor(nombres, apellidos, genero, fechaNacimiento, salario) {
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._genero = genero;
        this._fechaNacimiento = new Date(fechaNacimiento);
        this._salario = salario;
    }

    // Métodos de acceso (getters)
    get nombres() {
        return this._nombres;
    }

    get apellidos() {
        return this._apellidos;
    }

    get genero() {
        return this._genero;
    }

    get fechaNacimiento() {
        return this._fechaNacimiento.toLocaleDateString(); // Formato legible
    }

    get edad() {
        const hoy = new Date();
        const diferencia = hoy - this._fechaNacimiento;
        return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25)); // Cálculo de edad
    }

    get salario() {
        return this._salario;
    }

    // Métodos modificadores (setters)
    set nombres(nuevosNombres) {
        this._nombres = nuevosNombres;
    }

    set apellidos(nuevosApellidos) {
        this._apellidos = nuevosApellidos;
    }

    set genero(nuevoGenero) {
        this._genero = nuevoGenero;
    }

    set fechaNacimiento(nuevaFecha) {
        this._fechaNacimiento = new Date(nuevaFecha);
    }

    set salario(nuevoSalario) {
        this._salario = nuevoSalario;
    }

    // Método para aumentar el salario
    aumentarSalario(porcentaje) {
        this._salario += this._salario * (porcentaje / 100);
    }

    // Método para verificar mayoría de edad
    esMayorDeEdad() {
        return this.edad >= 18;
    }
}

// Función para mostrar el menú
function mostrarMenu() {
    console.log("\n--- Menú de Opciones ---");
    console.log("a. Consultar persona");
    console.log("b. Modificar persona");
    console.log("c. Aumentar salario");
    console.log("d. Verificar mayoría de edad");
    console.log("e. Salir");
}

// // Función principal
function main() {
    console.log("¡Hola! Vamos a crear una persona.");

    // Pedir datos al usuario para crear una persona
    let nombres = prompt("Ingresa los nombres: ");
    let apellidos = prompt("Ingresa los apellidos: ");
    let genero = prompt("Ingresa el género: ");
    let fechaNacimiento = prompt("Ingresa la fecha de nacimiento (YYYY-MM-DD): ");
    let salario = parseFloat(prompt("Ingresa el salario: "));

    // Crear la persona
    let persona = new Persona(nombres, apellidos, genero, fechaNacimiento, salario);

    let opcion;
    do {
        mostrarMenu();
        opcion = prompt("Elige una opción (a/b/c/d/e): ").toLowerCase();

        switch (opcion) {
            case 'a': // Consultar persona
                console.log("\n--- Información de la Persona ---");
                console.log(`Nombres: ${persona.nombres}`);
                console.log(`Apellidos: ${persona.apellidos}`);
                console.log(`Género: ${persona.genero}`);
                console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
                console.log(`Edad: ${persona.edad} años`);
                console.log(`Salario: $${persona.salario.toFixed(2)}`);
                break;

            case 'b': // Modificar persona
                console.log("\n--- Modificar Persona ---");
                persona.nombres = prompt("Nuevos nombres: ");
                persona.apellidos = prompt("Nuevos apellidos: ");
                persona.genero = prompt("Nuevo género: ");
                persona.fechaNacimiento = prompt("Nueva fecha de nacimiento (YYYY-MM-DD): ");
                persona.salario = parseFloat(prompt("Nuevo salario: "));
                console.log("¡Datos actualizados correctamente!");
                break;

            case 'c': // Aumentar salario
                let porcentaje = parseFloat(prompt("Ingresa el porcentaje de aumento: "));
                persona.aumentarSalario(porcentaje);
                console.log(`¡Salario aumentado! Nuevo salario: $${persona.salario.toFixed(2)}`);
                break;

            case 'd': // Verificar mayoría de edad
                if (persona.esMayorDeEdad()) {
                    console.log("¡Es mayor de edad!");
                } else {
                    console.log("¡No es mayor de edad!");
                }
                break;

            default:
                console.log("Opción inválida. Por favor, elige una opción válida.");
                break;
        }
    } while (opcion !== 'e'); // Repetir hasta que el usuario elija salir
}

// Iniciar el programa
main();


//taler 9_____________________________________________________________________________________
// Clase Vehículo
class Vehiculo {
    // Constructor
    constructor(placa, color, marca, modelo, kilometraje = 0, velocidad = 0) {
        this._placa = placa;
        this._color = color;
        this._marca = marca;
        this._modelo = modelo;
        this._kilometraje = kilometraje;
        this._velocidad = velocidad;
        this._encendido = false; // Estado inicial: apagado
    }

    // Método para prender el vehículo
    prender() {
        if (this._encendido) {
            console.log("El vehículo ya está prendido.");
        } else {
            this._encendido = true;
            console.log("\n--- Información del Vehículo ---");
            console.log(`Placa: ${this._placa}`);
            console.log(`Color: ${this._color}`);
            console.log(`Marca: ${this._marca}`);
            console.log(`Modelo: ${this._modelo}`);
            console.log(`Kilometraje: ${this._kilometraje} km`);
            console.log(`Velocidad: ${this._velocidad} km/h`);
            console.log("El vehículo ha sido prendido. 🚗");
        }
    }

    // Método para apagar el vehículo
    apagar() {
        if (!this._encendido) {
            console.log("El vehículo ya está apagado.");
        } else {
            this._encendido = false;
            console.log("\n--- Condiciones Finales del Vehículo ---");
            console.log(`Kilometraje: ${this._kilometraje} km`);
            console.log(`Velocidad: ${this._velocidad} km/h`);
            console.log("El vehículo ha sido apagado. 🔴");
        }
    }

    // Método para acelerar el vehículo
    acelerar() {
        if (!this._encendido) {
            console.log("No puedes acelerar. El vehículo está apagado.");
        } else if (this._velocidad >= 100) {
            console.log("No puedes acelerar más. La velocidad máxima es 100 km/h.");
        } else {
            this._velocidad += 10; // Aumenta la velocidad en 10 km/h
            this._kilometraje += 1; // Aumenta el kilometraje en 1 km
            console.log(`Acelerando... Velocidad actual: ${this._velocidad} km/h`);
        }
    }
}

// Función principal
function main() {
    console.log("¡Hola! Vamos a manejar un vehículo.");

    // Pedir datos al usuario para crear el vehículo
    let placa = prompt("Ingresa la placa del vehículo: ");
    let color = prompt("Ingresa el color del vehículo: ");
    let marca = prompt("Ingresa la marca del vehículo: ");
    let modelo = prompt("Ingresa el modelo del vehículo: ");

    // Crear el vehículo
    let vehiculo = new Vehiculo(placa, color, marca, modelo);

    let opcion;
    do {
        console.log("\n--- Menú de Opciones ---");
        console.log("1. Prender vehículo");
        console.log("2. Acelerar vehículo");
        console.log("3. Apagar vehículo");
        console.log("4. Salir");
        opcion = prompt("Elige una opción (1/2/3/4): ");

        switch (opcion) {
            case '1': // Prender vehículo
                vehiculo.prender();
                break;

            case '2': // Acelerar vehículo
                vehiculo.acelerar();
                break;

            case '3': // Apagar vehículo
                vehiculo.apagar();
                break;

            default:
                console.log("Opción inválida. Por favor, elige una opción válida.");
                break;
        }
    } while (opcion !== '4'); // Repetir hasta que el usuario elija salir
}

// Iniciar el programa
main();