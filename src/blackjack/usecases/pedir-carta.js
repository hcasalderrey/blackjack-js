

/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck  Ejemplo:  ['1C','1D','1H','1S' ....]; 
 * @returns {String} retorna una carta de la baraja, la ultima, del deck ya mezclado
 */

export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw new Error( 'No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}