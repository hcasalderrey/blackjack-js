/**
 * 
 * @param {String} carta es la carta que hay que mostrar 
 * @returns {HTMLImageElement} imagen que hay que mostrar de la carta
 */


export const crearCartaHTML =(carta) =>{
if(!carta) throw new Error('La carta es un argumento obligatorio');
      const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
      return imgCarta
}