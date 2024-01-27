/**
 * Funcion para pedir una carta
 * 
 * @param {Array<String>} deck
 * @returns {string} Retorna una carta dek Deck
*/

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
