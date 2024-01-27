import _ from "underscore";

/**
 * Esta funcion crea un nuevo Deck
 * @param {array<string>} tiposDeCarta 
 * @param {*array<string>} tiposEspeciales 
 * @returns {array<string>}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposDeCarta es Obligatorio');

    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('TiposDeCarta es Obligatorio');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}