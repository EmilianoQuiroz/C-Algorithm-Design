/**
 * 2C = 2 de trebol
 * 2D = 2 de diamantes
 * 2H = 2 de corazones
 * 2S = 2 de espadas
*/

// Mazo de cartas
let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

//Funcion para crear el mazo
const crearDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(tipo + especial);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

//Funcion para pedir una carta
const pedirCarta = () => {

    if (deck.length === 0) {
        throw 'No hay cartas';
    }

    const carta = deck.pop();
    console.log(deck);
    console.log(carta);
    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    let puntos = 0;

    if (isNaN(valor)) {
        puntos = (valor === 'A') ? 11 : 10;
    } else {
        puntos = valor * 1;
    }

    console.log(puntos);
}

valorCarta(pedirCarta());