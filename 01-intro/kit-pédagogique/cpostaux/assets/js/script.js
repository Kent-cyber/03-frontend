// Tableau vide qui sera rempli à l'appelle de la fonction generaliste donc les données seront dispo pour d'autre fonction...
var mesData = [];

const commune = document.getElementById("commune");
const codepostal = document.getElementById("codepostal");
const choix = document.getElementById("choix");
const ville = document.getElementById("ville");
const resultats = document.getElementById("resultats");

function genererListe(_data) {
  mesData = _data;

  /* for (let i = 0; i< _data.length; i++) {
        let maCommune=_data[i];
        let monOption= new Option();

        monOption.value=maCommune.codeCommune;
        monOption.innerText=maCommune.nomCommune +" CP: "+ maCommune.codePostal;
        document.getElementById("codepostal").appendChild(monOption);
    } */
}

fetch("https://arfp.github.io/tp/web/javascript/02-zipcodes/zipcodes.json")
  .then((response) => response.json())
  .then((data) => genererListe(data))
  .catch((error) => alert("Erreur : " + error.message));

commune.addEventListener("input", function () {
  const saisie = commune.value;

  codepostal.innerHTML = "";
  resultats.innerHTML = "";
  ville.textContent = "";

  if (saisie.length === 0) {
    return;
  }

  const suggestions = mesData.filter(
    (element) =>
      String(element.codePostal).includes(saisie) ||
      element.nomCommune.toLowerCase().includes(saisie.toLowerCase()),
  );

  suggestions.forEach((element) => {
    const option = document.createElement("option");

    option.value = element.codePostal + " - " + element.nomCommune;

    codepostal.appendChild(option);
  });
});

choix.addEventListener("click", function () {
  const valeur = commune.value;

  const selection = mesData.find(
    (element) => valeur === element.codePostal + " - " + element.nomCommune,
  );

  if (!selection) {
    alert("Veuillez choisir une ville parmi les suggestions");
    return;
  }

  ville.textContent = selection.nomCommune;

  resultats.innerHTML = `<p>Nom : ${selection.nomCommune}</p>
    <p>Code postal : ${selection.codePostal}</p>`;
});

/* let monbtn = document.querySelector("#choix");
monbtn.addEventListener("click", function () {
    let maSelection = document.querySelector("#commune").value;

    // for (let i = 0; i < mesData.length; i++) {
    //     if( maSelection==mesData[i].codeCommune)
    //     {
            
    //         boolTrouve=mesData[i];
    //         break;

    //     }    
    // }
    let objrecherche = mesData.find(item => item.codeCommune == maSelection);

    if (objrecherche) {
        document.querySelector("#ville").innerText = objrecherche.libelleAcheminement;
    } else {
        document.querySelector("#ville").innerText = "Commune introuvable";
    }
    
}) */