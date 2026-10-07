/* ============================
CALCUL DATE
============================ */
const birthday = document.getElementById("birthday");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

function zodiacSign(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const signs = [ // Tableau des signes
    {name: "Capricorne", month: 1, day: 19},
    {name: "Verseau", month: 2, day: 18},
    {name: "Poissons", month: 3, day: 20},
    {name: "Bélier", month: 4, day: 19},
    {name: "Taureau", month: 5, day: 20},
    {name: "Gémeaux", month: 6, day: 20},
    {name: "Cancer", month: 7, day: 22},
    {name: "Lion", month: 8, day: 22},
    {name: "Vierge", month: 9, day: 22},
    {name: "Balance", month: 10, day: 22},
    {name: "Scorpion", month: 11, day: 21},
    {name: "Sagittaire", month: 12, day: 21},
  ];

  for (let i = 0; i < signs.length; i++) {
    const sign = signs[i];

    if (month < sign.month || (month === sign.month && day <= sign.day)) {
        return sign.name;
    }
  }
  return "Capricorne";
}

function calculAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  if (// si la date d'aujourd'hui n'est pas encore pour ceux qui sont nés en fin d'année
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

calculate.addEventListener("click", () => {
  let chainedate = birthday.value;
  let qtedate = Date.parse(chainedate); // convertit la chaine en nb de milliseconde depuis l'EPOCH
  const birthDate = new Date(qtedate);
  const today = new Date();

  if (!birthday.value || birthDate >= today) {
    result.textContent = "Erreur ! Merci de vouloir rentrer une autre date.";
    return;
  }

  const age = calculAge(birthDate);
  const signe = zodiacSign(birthDate);

  result.innerHTML =
    'Vous êtes né le <span class="date-naissance">' +
    birthDate.toLocaleDateString() +
    '</span> à <span class="heure-naissance">' +
    birthDate.toLocaleTimeString() +
    "</span>.<br>";
  result.innerHTML +=
    "Il s'est écoulé " + age + " années depuis votre naissance.<br>";
  result.innerHTML +=
    'Votre signe astrologique : <span class="zodiacSign">' + signe + "</span>.";
});

/* ============================
AFFICHER DATE ET HEURE DU JOUR
============================ */

/*const zoneDate= document.getElementById("txtDate");*/
const zoneDate = document.querySelector("#txtDate");
const zoneHeure = document.querySelector("#txtHour");

function afficherDate() {
  let dateJour = new Date();
  let jour =
    dateJour.getDate() < 10 ? "0" + dateJour.getDate() : dateJour.getDate();
  let mois =
    dateJour.getMonth() + 1 < 10
      ? "0" + (dateJour.getMonth() + 1)
      : dateJour.getMonth() + 1;
  let annee = dateJour.getFullYear();

  let chaineDate = annee + "-" + mois + "-" + jour;
  console.log(chaineDate);
  zoneDate.value = chaineDate;
}

function afficherHeure() {
  let dateHeure = new Date();
  let hour =
    dateHeure.getHours() < 10
      ? "0" + dateHeure.getHours()
      : dateHeure.getHours();
  let minute =
    dateHeure.getMinutes() < 10
      ? "0" + dateHeure.getMinutes()
      : dateHeure.getMinutes();
  let second =
    dateHeure.getSeconds() < 10
      ? "0" + dateHeure.getSeconds()
      : dateHeure.getSeconds();

  let chaineHeure = hour + ":" + minute + ":" + second;
  console.log(chaineHeure);
  zoneHeure.value = chaineHeure;
  setInterval(afficherHeure, 1000);
}

const mybtnDate = document.getElementById("btnDate");
mybtnDate.addEventListener("click", function () {
  afficherDate();
  //console.log("test");
});

const mybtnHour = document.getElementById("btnHour");
mybtnHour.addEventListener("click", afficherHeure);
