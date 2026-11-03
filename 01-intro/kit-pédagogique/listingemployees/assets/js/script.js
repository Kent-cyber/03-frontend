let myEmployees = [];

const myTable = document.getElementById("myTable");

function genererListe(_data) {
    myEmployees = _data.data;

    const headers = ["EID", "Full Name", "Email", "Monthly salary", "Year of birth", "Actions"];
    const thead = myTable.createTHead();
    const titleRow = thead.insertRow();

    headers.forEach((header) => {
        const cellh = document.createElement("th");
        cellh.textContent = header;
        titleRow.appendChild(cellh);
    });

    const tbody = document.createElement("tbody");

    for (let i = 0; i < 10; i++) {
        const employee = myEmployees[i];
        const ligne = document.createElement("tr");

        const donnees = [
            `${employee.id}`,
            `${employee.employee_name}`,
            genererEmail(employee.employee_name),
            `${(employee.employee_salary / 12).toFixed(2)} €`,
            `${new Date().getFullYear() - employee.employee_age}`,
            `En cours`
        ];

        for (let j = 0; j < donnees.length; j++) {
            const cell = document.createElement("td");
            cell.textContent = donnees[j];
            ligne.appendChild(cell);
        }

        tbody.appendChild(ligne);
    }
        
    myTable.appendChild(tbody);
}

function genererEmail(fullname) {
    let noms = fullname.split(" ");

    return noms[0][0].toLowerCase() + "." + noms[noms.length - 1].toLowerCase() + "@email.com";
}

fetch("https://dummy.restapiexample.com/api/v1/employees")
.then(response => response.json())
.then(data => genererListe(data))
.catch(error => alert("Erreur : " + error.message));