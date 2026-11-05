const myTable = document.getElementById("myTable");

let myStudents = [];

function genererTableau(_data) {
    myStudents = _data;

    myStudents.sort((a, b) => {
        return b.grade - a.grade;
    })

    const headers = ["Nom", "Prénom", "Note"];
    const thead = myTable.createTHead();
    const titleRow = thead.insertRow();

    headers.forEach((header) => {
        const cellh = document.createElement("th");
        cellh.textContent = header;

        titleRow.appendChild(cellh);
    });

    const tbody = myTable.createTBody();

    for (let i = 0; i < myStudents.length; i++) {
        const student = myStudents[i];

        let noms = student.fullname.split(" ");
        let nom = noms[0];
        let prenom = noms[1];

        const ligne = document.createElement("tr");

        const donnees = [nom, prenom, student.grade];

        for (let j = 0; j < donnees.length; j++) {
            const cell = document.createElement("td");
            cell.textContent = donnees[j];
            ligne.appendChild(cell);
        }

        tbody.appendChild(ligne);
    }
}

fetch("./assets/js/eval.json")
.then(response => response.json())
.then(data => genererTableau(data))
.catch(error => alert("Erreur : " + error.message));