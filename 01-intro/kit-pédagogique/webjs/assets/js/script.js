/*const zoneDate= document.getElementById("txtDate");*/
const zoneDate=document.querySelector("#txtDate");
const zoneHeure = document.querySelector("#txtHour");

function afficherDate () {

    let dateJour= new Date();
    let jour= (dateJour.getDate()< 10) ? "0" +dateJour.getDate() : dateJour.getDate();
    let mois= (dateJour.getMonth()+ 1 < 10) ? "0" +(dateJour.getMonth() + 1) : dateJour.getMonth() + 1;
    let annee= dateJour.getFullYear();

    let chaineDate= annee + "-" + mois + "-" + jour;
    console.log(chaineDate);
    zoneDate.value=chaineDate;
}

function afficherHeure () {
    let dateHeure = new Date();
    let hour = (dateHeure.getHours()<10) ? "0"+dateHeure.getHours() : dateHeure.getHours();
    let minute = (dateHeure.getMinutes()<10) ? "0"+dateHeure.getMinutes() : dateHeure.getMinutes();
    let second = (dateHeure.getSeconds()<10) ? "0"+dateHeure.getSeconds() : dateHeure.getSeconds();

    let chaineHeure = hour + ":" + minute + ":" + second;
    console.log(chaineHeure);
    zoneHeure.value = chaineHeure;
    setInterval(afficherHeure, 1000);
}



const mybtnDate=document.getElementById("btnDate");
mybtnDate.addEventListener("click", function() {
afficherDate();
//console.log("test");
})

const mybtnHour = document.getElementById("btnHour");
mybtnHour.addEventListener("click", afficherHeure);

