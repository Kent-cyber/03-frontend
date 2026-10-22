fetch("./assets/js/employee.json")
.then(response => response.json())
.then(utilisateurs => {
    const form = document.querySelector("form");
    const champIdentifiant = document.getElementById("identifiant");
    const champPassword = document.getElementById("password");
    const espaceUtilisateur = document.getElementById("espaceUtilisateur");
    const blockError = document.getElementById("blockError");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const identifiant = champIdentifiant.value;
        const password = champPassword.value;

        const utilisateur = utilisateurs.find(user => {
            const identifiantJSON = `${user.firstname}.${user.lastname}`.toLowerCase();

            return identifiantJSON === identifiant && user.password === password;
        });

        if (utilisateur) {
            form.hidden = true;
            espaceUtilisateur.hidden = false;

            const welcome = document.createElement("p");
            welcome.textContent = `Bonjour ${utilisateur.firstname} ${utilisateur.lastname}`;

            const deconnectButton = document.createElement("button");
            deconnectButton.type = "button";
            deconnectButton.textContent = "Déconnexion";

            deconnectButton.addEventListener("click", () => {
                espaceUtilisateur.hidden = true;
                form.hidden = false;

                champIdentifiant.value = "";
                champPassword.value = "";
            });

            espaceUtilisateur.append(welcome, deconnectButton);

            // Création du tableau
            const tableau = document.createElement("table");
            tableau.className = "tableEmployes";

            // Création du header
            const thead = document.createElement("thead");
            const titleRow = document.createElement("tr");

            const headers = [
                "Nom",
                "Prénom",
                "Date de naissance",
                "Email",
                "Salaire"
            ];

            headers.forEach((header) => {
                const cell = document.createElement("th");
                cell.textContent = header;
                titleRow.appendChild(cell);
            });

            thead.appendChild(titleRow);
            tableau.appendChild(thead);

            // Création du body
            const tbody = document.createElement("tbody");

            utilisateurs.forEach(user => {
                const ligne = document.createElement("tr");

                if (user === utilisateur) {
                    ligne.classList.add("surbrillance");
                }

                const email = `${user.firstname}.${user.lastname}@exemple.com`.toLowerCase();
            })

        } else {
            
            blockError.className = "errorField";
            blockError.textContent = "Identifiant ou mot de passe incorrect";

            setTimeout(() => {
                blockError.remove();
            }, 5000);
        }
    })
})
.catch(error => console.error("Erreur : " + error));