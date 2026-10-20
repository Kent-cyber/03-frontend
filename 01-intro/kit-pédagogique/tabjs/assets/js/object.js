const myEmployee = {
    lastname: "Doe",
    firstname: "John",
    birthday: "1981-11-12",
    salary: 2150
}

const content = document.getElementById("content");

// Création du titre
const myTitle = document.createElement("h1");
myTitle.textContent = `Profil de ${myEmployee.firstname} ${myEmployee.lastname}`;
content.appendChild(myTitle);

// Création de l'email
const email = `${myEmployee.firstname.toLowerCase()}.${myEmployee.lastname.toLowerCase()}@exemple.com`;

// Préparation des en-têtes et des données
const headers = [
    "Nom",
    "Prénom",
    "Date de naissance",
    "Email",
    "Salaire"
];
const employeeData = [
    myEmployee.lastname,
    myEmployee.firstname,
    myEmployee.birthday,
    email,
    myEmployee.salary + " €"
];

// Création du tableau et son header
const myTable = document.createElement("table");
content.appendChild(myTable);
const myThead = myTable.createTHead();
const titleRow = myThead.insertRow();

headers.forEach((header) => {
    const cell = document.createElement("th");
    cell.textContent = header;
    titleRow.appendChild(cell);
})

// Création du body du tableau
const myTbody = myTable.createTBody();
const oneRow = myTbody.insertRow();

employeeData.forEach((value) => {
    const cell = oneRow.insertCell();
    cell.textContent = value;
});

// Création du formulaire et son titre
const myForm = document.createElement("form");
content.appendChild(myForm);
const formTitle = document.createElement("h2");
formTitle.textContent = "Modifier le profil";
myForm.appendChild(formTitle);

// Fonction pour créer les champs de formulaire
function createField(labelText, name, type, value) {
    const div = document.createElement("div");

    const label = document.createElement("label");
    label.textContent = labelText;
    label.htmlFor = name;

    const input = document.createElement("input");
    input.id = name;
    input.name = name;
    input.type = type;
    input.value = value;

    div.appendChild(label);
    div.appendChild(input);
    myForm.appendChild(div);

    return input;
}

const firstnameInput = createField(
    "Prénom :",
    "firstname",
    "text",
    myEmployee.firstname
);

const lastnameInput = createField(
    "Nom :",
    "lastname",
    "text",
    myEmployee.lastname
);

const birthdayInput = createField(
    "Date de naissance :",
    "birthday",
    "date",
    myEmployee.birthday
);

const salaryInput = createField(
    "Salaire (€) :",
    "salary",
    "number",
    myEmployee.salary
);

// Création bouton enregistrer
const button = document.createElement("button");
button.type = "submit";
button.textContent = "Enregistrer";
myForm.appendChild(button);

// Fonction pour update le tableau
function updateTable() {
    const email = `${myEmployee.firstname.toLowerCase()}.${myEmployee.lastname.toLowerCase()}@exemple.com`;
    myTitle.textContent = `Profil de ${myEmployee.firstname} ${myEmployee.lastname}`;

    myTbody.replaceChildren();

    const row = myTbody.insertRow();

    const employeeData = [
        myEmployee.lastname,
        myEmployee.firstname,
        myEmployee.birthday,
        email,
        myEmployee.salary
    ];

    employeeData.forEach((value) => {
        const cell = row.insertCell();
        cell.textContent = value;
    });
}

// Enregistrer des modifications
myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    myEmployee.firstname = firstnameInput.value;
    myEmployee.lastname = lastnameInput.value;
    myEmployee.birthday = birthdayInput.value;
    myEmployee.salary = Number(salaryInput.value);

    updateTable();
});

updateTable();