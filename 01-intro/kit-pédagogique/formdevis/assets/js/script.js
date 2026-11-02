const tabDiffusion = [
  "Par l'un de nos client !",
  "Par relation",
  "par un support publicitaire",
  "Par un moteur de recherche",
  "Par hasard",
];

let machaine =
  "un site plaquette,un site communal,un catalogue en ligne,une boutique en ligne (e-commerce),le référencement,de l'e-mailing,un intranet ou extranet,une GED (gestion électronique de document),un relookage de votre site,une formation,la réalisation d'un cahier des charges,un audit accessibilité,le dépôt d'un nom de domaine en .fr,en savoir plus sur la solution ia souveraine";

const liste1 = document.getElementById("reason-select");
const liste2 = document.getElementById("interect-select");

tabDiffusion.forEach(element => {

    const option = document.createElement("option");

    option.textContent = element;
    option.value = element;

    liste1.appendChild(option);
});

const tabInterect = machaine.split(",");

tabInterect.forEach(element => {
    const option = document.createElement("option");

    option.textContent = element;
    option.value = element;

    liste2.appendChild(option);
});

const form = document.getElementById("formDevis");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const tel = document.getElementById("phone");
const company = document.getElementById("company");
const msg = document.getElementById("msg");
const submitData = document.getElementById("submitData");

const regexNom = /^[a-zA-Z-]{3,}$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexPhone = /^0[1-79][0-9]{8}$/;
const regexCompany = /^[a-zA-Z0-9-]{3,30}$/;

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let validation = true;

    if (!regexNom.test(firstname.value)) {
        alert("Le prénom doit contenir au moins 3 lettres alphabétiques");
        validation = false;
        return;
    }

    if (!regexNom.test(lastname.value)) {
        alert("Le nom doit contenir au moins 3 lettres aplhabétiques");
        validation = false;
        return;
    }

    if (!regexEmail.test(email.value)) {
        alert("Email invalide");
        validation = false;
        return;
    }

    if (!regexPhone.test(tel.value)) {
        alert("Numéro de téléphone invalide");
        validation = false;
        return;
    }

    if (!regexCompany.test(company.value)) {
        alert("L'entreprise ou la collectivité doit contenir au moins 3 lettres alphabétiques et au plus 30 caractères");
        validation = false;
        return;
    }

    if (/[<>"]/.test(msg.value)) {
        alert("Les chevrons et doubles quotes ne sont pas autorisés");
        validation = false;
        return;
    }

    if (!submitData.checked) {
        alert("Veuillez accepter les conditions de traitement de vos données");
        validation = false;
        return;
    }

    if (validation) {
        form.submit();
    }
});