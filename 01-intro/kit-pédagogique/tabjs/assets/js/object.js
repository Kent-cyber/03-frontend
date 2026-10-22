const myEmployee = {
  lastname: "Doe",
  firstname: "John",
  birthday: "1981-11-12",
  salary: 2150,
};

const content = document.getElementById("content");

// Création du titre
const myTitle = document.createElement("h1");
myTitle.textContent = `Profil de ${myEmployee.firstname} ${myEmployee.lastname}`;
content.appendChild(myTitle);

// Création de l'email
const email = `${myEmployee.firstname.toLowerCase()}.${myEmployee.lastname.toLowerCase()}@exemple.com`;

// Header et data
const headers = ["Nom", "Prénom", "Date de naissance", "Email", "Salaire"];
const employeeData = [
  myEmployee.lastname,
  myEmployee.firstname,
  myEmployee.birthday,
  email,
  myEmployee.salary + " €",
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
});

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
  myEmployee.firstname,
);

const lastnameInput = createField(
  "Nom :",
  "lastname",
  "text",
  myEmployee.lastname,
);

const birthdayInput = createField(
  "Date de naissance :",
  "birthday",
  "date",
  myEmployee.birthday,
);

const salaryInput = createField(
  "Salaire (€) :",
  "salary",
  "number",
  myEmployee.salary,
);

// Création bouton enregistrer
const button = document.createElement("button");
button.type = "submit";
button.textContent = "Enregistrer";
myForm.appendChild(button);

// Fonction pour update le tableau
function updateTable() {
  const email =
    `${myEmployee.firstname}.${myEmployee.lastname}@exemple.com`.toLowerCase();
  myTitle.textContent = `Profil de ${myEmployee.firstname} ${myEmployee.lastname}`;

  myTbody.replaceChildren();

  const row = myTbody.insertRow();

  const employeeData = [
    myEmployee.lastname,
    myEmployee.firstname,
    myEmployee.birthday,
    email,
    myEmployee.salary + " €",
  ];

  employeeData.forEach((value) => {
    const cell = row.insertCell();
    cell.textContent = value;
  });
}

// Enregistrer des modifications
myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstname = firstnameInput.value;
  const lastname = lastnameInput.value;
  const birthday = birthdayInput.value;
  const salary = Number(salaryInput.value);

  const lettersOnly = /^\p{L}{2,}$/u;

  if (!lettersOnly.test(firstname)) {
    alert(
      "Le prénom doit contenir au moins deux lettres et uniquement des lettres !",
    );
    firstnameInput.focus();
    return;
  }

  if (!lettersOnly.test(lastname)) {
    alert(
      "Le prénom doit contenir au moins deux lettres et uniquement des lettres !",
    );
    lastnameInput.focus();
    return;
  }

  const today = new Date();
  const todayString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  console.log(todayString);

  if (!birthday || birthday >= todayString) {
    alert("La date de naissance doit être dans le passé !");
    birthdayInput.focus();
    return;
  }

  if (
    salaryInput.value.trim() === "" ||
    !Number.isFinite(salary) ||
    salary < myEmployee.salary
  ) {
    alert("Le salaire ne peut pas être inférieur au salaire précédent !");
    salaryInput.focus();
    return;
  }

  myEmployee.firstname = firstname;
  myEmployee.lastname = lastname;
  myEmployee.birthday = birthday;
  myEmployee.salary = salary;

  updateTable();
});
