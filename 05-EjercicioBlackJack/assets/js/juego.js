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
    console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();