const texte = document.getElementById("texte");
const tailleActuelle = document.getElementById("tailleActuelle");
const agrandir = document.getElementById("agrandir");
const diminuer = document.getElementById("diminuer");

let taille = 16;

function mettreAJourTaille() {
  texte.style.fontSize = `${taille}px`;
  tailleActuelle.value = taille;
}

agrandir.addEventListener("click", () => {
  if (taille >= 48) {
    taille = 16;
  } else {
    taille++;
  }
  mettreAJourTaille();
});

diminuer.addEventListener("click", () => {
  if (taille <= 8) {
    taille = 16;
  } else {
    taille--;
  }
  mettreAJourTaille();
});