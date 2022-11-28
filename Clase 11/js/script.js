// Primer ejercicio 
let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana){

 case "lunes":
 alert("Hoy es lunes.");
 break;

 case "martes":
 alert("Hoy es martes.");
 break;

 case "miércoles":
 alert("Hoy es miércoles.");
 break;

 case "jueves":
 alert("Hoy es jueves.");
 break;

 case "viernes":
 alert("Hoy es viernes.");
 break;
 
 case "sábado":
 alert("Hoy es sábado.");
 break;

 case "domingo":
 alert("Hoy es domingo.");
 break;

 default:
 alert("Escribe el día de la semana en minúsculas.");
}

// Segundo ejercicio

let saludo = prompt("¿Cuantas veces quiere que aparezca el saludo?")

for(i=1;i<=saludo;i++){
    document.write("HOLA MUNDO" + "<br><br>");
 }