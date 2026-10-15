let people = ["Matt Moissat", "Benjamin Hunter", "Léa Grande"];
const peopleList = document.getElementById("peopleList");
const peopleTable = document.getElementById("peopleTable");

function insertTitleCell(_value, _hook) {
    const myTitleCell = document.createElement("th");
    myTitleCell.textContent = _value;
    _hook.appendChild(myTitleCell);
}


    // Création du header du tableau
    const myThead = peopleTable.createTHead();
    const titleRow = myThead.insertRow();
    insertTitleCell("Nom", titleRow);
    insertTitleCell("Prénom", titleRow);
    insertTitleCell("Email", titleRow);
    insertTitleCell("Supprimer", titleRow);

    // Création du body du tableau
    const myTbody = peopleTable.createTBody();

for (let i = 0; i <people.length; i++) {
    // Création de la liste
  const li = document.createElement("li");
    li.textContent = people[i];
    peopleList.appendChild(li);
    //ok verif

    // Séparer le prénom et le nom
    const tabPersonne = people[i].split(" ");
    const prenom = tabPersonne[0];
    const nom = tabPersonne[1];
    // const email = prenom.toLowerCase() + "." + nom.toLowerCase() + "@exemple.com";
    const email2=`${prenom.toLowerCase()}.${nom.toLowerCase()}@exemple.com`;
    
    // Création des lignes du tableau
    const oneRow = myTbody.insertRow();
    const cellNom = oneRow.insertCell();
    cellNom.textContent = nom;
    const cellPrenom = oneRow.insertCell();
    cellPrenom.textContent = prenom;
    const cellEmail = oneRow.insertCell();
    cellEmail.textContent = email2;

    // Création de la colonne supprimer
     const tdSupprimer = oneRow.insertCell();
    tdSupprimer.className = "suppr";
    const croix = document.createElement("button");
    croix.textContent = "❌";
    croix.type = "button";

    tdSupprimer.appendChild(croix);
    
    croix.addEventListener("click", () => {
        li.remove();
        oneRow.remove();
    });

}

    // Création de la ligne du tableau et des cellules
    //const tr = document.createElement("tr");
   // const tdNom = document.createElement("td");
   
    //const tdPrenom = document.createElement("td");

    //const tdEmail = document.createElement("td");

    // Création de la cellule de suppression
   

    // Fonction pour supprimer la liste et la ligne de tableau
    



    // tdSupprimer.appendChild(croix);

    // tr.appendChild(tdNom);
    // tr.appendChild(tdPrenom);
    // tr.appendChild(tdEmail);
    // tr.appendChild(tdSupprimer);

    // peopleTable.appendChild(tr);


/**
 * 
 * @param {*} firstName 
 * @param {*} lastName 
 */

function addPeople(firstName, lastName) {
    const list = document.getElementById("peopleList");
    const table = document.getElementById("peopleTable");
    const message = document.getElementById("message");

    const person = `${firstName} ${lastName}`;
    people.push(person);

    const li = document.createElement("li");
    li.textContent = person;
    list.appendChild(li);

    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@exemple.com`;

    const tbody = table.querySelector("tbody");
    const row = tbody.insertRow();

    row.insertCell().textContent = lastName;
    row.insertCell().textContent = firstName;
    row.insertCell().textContent = email;

    const cellSupprimer = row.insertCell();
    cellSupprimer.className = "suppr";
    const button = document.createElement("button");
    button.textContent = "❌";
    button.type = "button";

    cellSupprimer.appendChild(button);

    button.addEventListener("click", () => {
        li.remove();
        row.remove();
    });

    message.textContent = `${firstName} ${lastName} ajouté`;

}