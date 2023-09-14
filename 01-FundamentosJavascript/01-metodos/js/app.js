//-- Metodos --//

// Cantidad de elementos de un string
const metodoLength = 'Cantidad de letras';
console.log(metodoLength.length);

// En que posicion se encuentra una palabra
const metodoIndexOf = 'Posicion en la que se encuentra una palabra';
console.log(metodoIndexOf.indexOf('en'));
// da como resultado la posicion en la que se encuentra el texto end

// Si incluye o no un elemento
const metodoIncludes = 'Si contiene o no el elemento indicado'
console.log(metodoIncludes.includes('elemento'));
console.log(metodoIncludes.includes('elemetos'));
// Da como resultado true o false en caso de que incluya o no el elemento indicado

// Reemplazar un elemento por otro
const metodoReplace = 'Monitor curvo 27 pulgadas';
console.log(metodoReplace);
console.log(metodoReplace.replace('pulgadas', '"'));
// Reemplaza el primer elemento por el segundo

// Cortar una cadena de texto
const metodoSlices = 'Cortar una parte de un string';
console.log(metodoSlices);
console.log(metodoSlices.slice(1, 5));

// Repetir una cadena de texto
const metodoRepeat = 'Repetir una cadena de texto';
console.log(metodoRepeat.repeat(6));

// Dividir un string 
const metodoSplit = 'Dividir una cadena de caracteres';
console.log(metodoSplit);
console.log(metodoSplit.split(" "));

// Convertir a Mayuscula
const metodoToUppercase = 'Convertir texto a mayuscula';
console.log(metodoToUppercase);
console.log(metodoToUppercase.toUpperCase());

// Convertir a minuscula
const metodoToLowecase = 'CONVERTIR TEXTO A MINUSCULA';
console.log(metodoToLowecase);
console.log(metodoToLowecase.toLowerCase());

// Convertir numeros a String
const metodoToString = 300;
console.log(metodoToString);
console.log(metodoToString.toString());