//-- Metodos de los arreglos --//

let frutas = ['Peras', 'Manzanas', 'Bananas', 'Ciruelas', 'Uvas'];

// .length nos muestra la cantidad de elementos que tiene un array
console.log('Largo del array', frutas.length);

// Obtener el ultimo elemento del arreglo
let ultimo = frutas[ frutas.length - 1 ];
console.log('Ultimo elemento', ultimo);

// forEach para ejecutar una instruccion por cada uno de los elementos del array
frutas.forEach((elemento, indice, arr) =>{
    console.log(elemento, indice, arr);
})

// .push para incertar un nuevo elemento al final del array
frutas.push('Frambuesa');
console.log(frutas);

// .unshift para incertar un nuevo elemento al principio del array
frutas.unshift('Mango');
console.log(frutas);

// .pop para borrar el ultimo elemento del array
frutas.pop();
console.log(frutas);

// .indexOf para saber la posicion de un elemento del array
frutas.indexOf('Bananas');
console.log(frutas);
