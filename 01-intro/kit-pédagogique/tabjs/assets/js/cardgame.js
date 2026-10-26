/* ********************** FONCTIONS *********************************** */

function displayTable(_data) {
    const table = document.querySelector("table");
    const titleHead = table.createTHead();
    const titleRow = titleHead.insertRow();

    for (const key in _data[0]) {
        const titleCell = document.createElement("th");
        titleCell.textContent = key;
        titleRow.appendChild(titleCell);
    }

    const tableBody = table.createTBody();
    
    for (const card of _data) {
        const bodyRow = tableBody.insertRow();

        for (const key in _data[0]) {
            const cell = bodyRow.insertCell();

            if (key === "description" && card[key] === undefined) {
                cell.textContent = "";
            } else {
                cell.textContent = card[key];
            }
        }
    }
}

/* ********************************************************************* */

fetch("https://arfp.github.io/tp/web/javascript/03-cardgame/cardgame.json")
.then(response => response.json())
.then(data => {
    displayTable(data);
})
.catch(error => alert("Erreur : " + error));