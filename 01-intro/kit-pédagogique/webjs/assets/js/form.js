/* récupérer les  valeurs des contrôles de saisie en JS et 
ajouter un évènement "click" sur le bouton submit() 
en supprimant le  comportement par défaut. */

import  Article  from './Article.js';


const formulaire= document.querySelector("#formulaire");
const nomArt= document.querySelector("#nom");
const prixArt_HT= document.getElementById("prix");
const taux_TVA= document.getElementById("tva");
const liste= document.getElementById("articles");

const btnvalider= document.querySelector("#valider");



btnvalider.addEventListener("click", (event)=>{

    event.preventDefault();
let nom =nomArt.value;
let prixHT=parseFloat(prixArt_HT.value);
let tva= parseFloat(taux_TVA.value);
const monArticle= new Article(nom,prixHT,tva);

    let monLi= document.createElement("li");
    monLi.textContent="description Article - nom : "+ monArticle.nom +" de prix TTC :" + monArticle.calculPrixTTC().toFixed(2);
    liste.appendChild(monLi);    

})