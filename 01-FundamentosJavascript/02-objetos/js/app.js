//-- Objetos --//

let destino = {
    pais: 'Portugal',
    ciudad: 'Oporto',
    aplicaDescuento: false,
    cupos: 20,
    coordenadas: {
        lat: 34.034,
        lng: -118.70
    },
    actividades: {
        act1: 'Tour de playas',
        act2: 'Kayak',
        act3: 'Cuevas'
    }
};

// Imprimimos el objeto completo
console.log( destino );

// Imprimimos un elemento del objeto
console.log('Destino', destino.ciudad);

// Accedemos al array completo
console.log( destino['actividades'] );

// Accedemos a un elemento del array dentro del objeto
console.log( destino.actividades.act1 );

// cantidad de actividades
console.log('Cantidad de actividades', destino.actividades.length );
