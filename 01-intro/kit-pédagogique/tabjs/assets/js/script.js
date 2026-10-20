const people = ['Mike Brant', 'John Makenzie', 'Ariana Grande'];
people.push("Dua Lipa");
people.unshift("Miley Cyrus");
people.push("Mark Ronson");
people.pop();
people.push( "Mary J.blige");

people.splice(people.length-1,1,"Mark Ronson");
const mylist= document.querySelector("ul");
mylist.style.listStyle="none";
mylist.style.marginLeft="0";
mylist.style.paddingLeft="0";

for (let i = 0; i < people.length; i++) {
    //console.log(people[i]+",");
const myItem= document.createElement("li");
myItem.className=" deco";
myItem.textContent=people[i];
mylist.appendChild(myItem);    
}

let chaine = "nom,prenom,mail";
let tabchaine= chaine.split(",");
// let mychaine= [...chaine];
 console.log(tabchaine);
const myTable= document.getElementById("singer");

const myThead= myTable.createTHead();
const myTitleRow=myThead.insertRow();

function insertTitleCell(_value, _hook )
{
    const myTitleCell= document.createElement("th");
    myTitleCell.style.fontWeight="bold";
    myTitleCell.textContent=_value;
    _hook.appendChild(myTitleCell);
}

for (let i = 0; i < tabchaine.length; i++) {
    insertTitleCell(tabchaine[i],myTitleRow)
}