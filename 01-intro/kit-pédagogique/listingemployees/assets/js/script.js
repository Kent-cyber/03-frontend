let myEmployees = [];
let newData = [];

const myTable = document.getElementById("myTable");

let ordreCroissant = true;

function genererListe(_data) {
    myEmployees = _data.data;

    const headers = ["EID", "Full Name", "Email", "Monthly salary", "Year of birth", "Actions"];
    const thead = myTable.createTHead();
    const titleRow = thead.insertRow();

    headers.forEach((header) => {
        const cellh = document.createElement("th");

        if (header === "Monthly salary") {
            const btntri = document.createElement("button");
            btntri.textContent = "Trier ↑↓";

            btntri.addEventListener("click", () => {
                trier();
            });

            cellh.appendChild(document.createTextNode(header + " "));
            cellh.appendChild(btntri);
        } else {
            cellh.textContent = header;
        }
        
        titleRow.appendChild(cellh);
    });
    
    newData = myEmployees.slice(0, 10);

    const tbody = document.createElement("tbody");    
    myTable.appendChild(tbody);

    const tfoot = myTable.createTFoot();
    const footerRow = tfoot.insertRow();

    const cellTotal = footerRow.insertCell();
    cellTotal.colSpan = 3;
    cellTotal.textContent = "TOTAL";

    const cellSalaire = footerRow.insertCell();
    cellSalaire.textContent = "0.00 €";

    const cellVide = footerRow.insertCell();
    cellVide.colSpan = 2;

    afficherEmployes();
}

function trier() {
    newData.sort((a, b) => {
        if (ordreCroissant) {
            return a.employee_salary - b.employee_salary;
        } else {
            return b.employee_salary - a.employee_salary;
        }
    });

    ordreCroissant = !ordreCroissant;

    const btntri = myTable.querySelector("th:nth-child(4) button");
    btntri.textContent = ordreCroissant ? "Trier ↑" : "Trier ↓";

    afficherEmployes();
}

function genererEmail(fullname) {
    let noms = fullname.split(" ");

    return noms[0][0].toLowerCase() + "." + noms[noms.length - 1].toLowerCase() + "@email.com";
}

function afficherEmployes() {
    const tbody = myTable.querySelector("tbody");

    tbody.innerHTML = "";

    let totalSalaire = 0;

    for (let i = 0; i < newData.length; i++) {
        const employee = newData[i];
        const ligne = document.createElement("tr");

        const donnees = [
            `${employee.id}`,
            `${employee.employee_name}`,
            genererEmail(employee.employee_name),
            `${(employee.employee_salary / 12).toFixed(2)} €`,
            `${new Date().getFullYear() - employee.employee_age}`,
        ];

        totalSalaire += employee.employee_salary / 12;

        for (let j = 0; j < donnees.length; j++) {
            const cell = document.createElement("td");
            cell.textContent = donnees[j];
            ligne.appendChild(cell);
        }

        const cellActions = document.createElement("td");

        const btnduplicate = document.createElement("button");
        btnduplicate.textContent = "Duplicate";

        btnduplicate.addEventListener("click", () => {
            duplicateEmployee(employee.id);
        });

        const btndelete = document.createElement("button");
        btndelete.textContent = "Delete";

        btndelete.addEventListener("click", () => {
            deleteEmployee(employee.id);
        });

        cellActions.appendChild(btnduplicate);
        cellActions.appendChild(btndelete);
        ligne.appendChild(cellActions);

        tbody.appendChild(ligne);
    }

    myTable.querySelector("tfoot td:nth-child(2)").textContent = totalSalaire.toFixed(2) + " €";
}

function deleteEmployee(id) {
    myEmployees = myEmployees.filter(emp => emp.id !== id);
    newData = newData.filter(emp => emp.id !== id);

    afficherEmployes();
}

fetch("https://dummy.restapiexample.com/api/v1/employees")
.then(response => response.json())
.then(data => genererListe(data))
.catch(error => alert("Erreur : " + error.message));