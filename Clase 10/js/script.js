// Primer ejercitación
let nombre = "Programación" + " Fácil.";
let saludo = "Les doy la bienvenida a ";
let hola = "Hola. "
let fraseCompleta = hola + saludo + nombre;
console.log(fraseCompleta);

// Segunda ejercitación

let frase = "JavaScript " + "es un lenguaje" + " esencial para crear" + " sitios web poderosos" + " y únicos.";
console.log(frase);

// Tercera ejercitación

let numeroString1 = "10";
let str1 = " horas,"
let numeroString2 = " 20 ";
let str2 = "minutos y"
let numeroString3 = " 30";
let str3 = " segundos."
let concatenaNumeros = numeroString1 + str1 + numeroString2 + str2 + numeroString3 + str3;
console.log(concatenaNumeros);

// Cuarta ejercitación

let edad;
edad = prompt("Introduce tu edad");

let genero;
genero = prompt("¿Sos hombre o mujer?");

if (edad >= 18 && genero === "hombre"){
alert("Puedes entrar, eres mayor de edad.");
} else if (edad >= 20 && genero === "mujer"){
    alert("Puedes entrar, eres mayor de edad.");
} else {
    alert("No puedes entrar, eres menor de edad.");
}
 




