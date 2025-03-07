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


// TALLER 2_____________________________________________

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

// NO REALICE ESTE TRABAJO EN EL PUNTO 5 TA COMPLEJO


// TALLER 6_____________________________________________________________________
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


//NO HE PODIDO REALIZAR EL RESTO (+ _ *)