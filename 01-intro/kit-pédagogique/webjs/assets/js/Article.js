//import { Validation } from "Validation.js";

export default class Article {
   /**
     * constructeur
     * @param {String} _nom Le nom de l'article
     * @param {Number} _prixHT Le prix Hors taxes de l'article
     * @param {Number} _tva  La TVA appliquée à l'article
     */
    //attribut 
    // propriétés get set
  // constructor {}
    constructor(_nom, _prixHT, _tva) {
        this.nom=_nom;
        this.prixHT=_prixHT;
        this.tauxTva=_tva;
    }
    calculPrixTTC() {
        
        let PrixTTC= this.prixHT*(1+(this.tauxTva/100));
            return PrixTTC;
    }


}