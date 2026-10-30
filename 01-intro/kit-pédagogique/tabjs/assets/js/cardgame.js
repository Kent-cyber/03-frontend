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

function displayBestCard(_data, _stat, _id) {
    const bestCard = _data.reduce((best, card) => {
        if (best[_stat] > card[_stat]) {
            return best;
        } else {
            return card;
        }
    });

    const article = document.querySelector(`#${_id}`);

    article.querySelector(".card__header").textContent = bestCard.name;
    article.querySelector(".card__subtitle").textContent = `Played : ${bestCard.played} | Victories : ${bestCard.victory}`;
    const paragraphs = article.querySelectorAll(".card__main p");

    paragraphs[0].textContent = `Power : ${bestCard.power}`;
    paragraphs[1].textContent = `Attack : ${bestCard.attack}`;
    paragraphs[2].textContent = `Armor : ${bestCard.armor}`;
}

/* ********************************************************************* */

fetch("https://arfp.github.io/tp/web/javascript/03-cardgame/cardgame.json")
.then(response => response.json())
.then(data => {
    displayTable(data);
    displayBestCard(data, "attack", "attack");
    displayBestCard(data, "armor", "armor");
    displayBestCard(data, "played", "played");
    displayBestCard(data, "victory", "victory");
})
.catch(error => alert("Erreur : " + error));