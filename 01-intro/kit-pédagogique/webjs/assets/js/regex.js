const mybtnSubmit = document.getElementById("valider");
const txtName = document.querySelector("#myName");
const chaine1 = document.querySelector("#myPassword1");
const chanine2 = document.querySelector("#myPassword2");
const date = document.getElementById("myBirthDate");
const phone = document.getElementById("myPhone");

mybtnSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  const myForm = document.querySelector("form");

  if (
    regexName(txtName.value) &&
    regexPassword(chaine1.value) &&
    validatePassword(chaine1.value, chanine2.value) &&
    regexDate(date.value) &&
    regexPhone(phone.value)
  ) {
    myForm.submit();
  } else {
    alert("Veuillez vérifier les informations saisies !");
  }
});
/**
 *
 * @param {*} chaine
 */

function regexName(chaine) {
  let regexName = /^[A-Z][a-z]{3,}$/;

  return regexName.test(chaine);
}

function regexPhone(chaine) {
  const telephone = chaine.replace(/[ .-]/g, "");
  let regexPhone = /^0[1-79][0-9]{8}$/;

  return regexPhone.test(telephone);
}

function regexPassword(chaine) {
  let regexPassword = /^.{9,}$/;

  return regexPassword.test(chaine);
}

function validatePassword(chaine1, chanine2) {
  if (chaine1 === chanine2) {
    return true;
  }
  return false;
}

function regexDate(date) {
  let regexDate = /^\d{4}-\d{2}-\d{2}$/;

  return regexDate.test(date);
}
