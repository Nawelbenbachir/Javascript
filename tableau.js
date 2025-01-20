//Variable de type string initialisée avec une chaîne de caractère
let etudiant="Pierre";
//Variable de type tableau, initialisée avec une liste de chaînes de caractères
let etudiants=["Jean","Marc","Marie", "Luc", "Julie"];

console.log(etudiant);
console.log(etudiants);

//Affiche la taille du tableau
console.log(etudiants.length);

//Affiche le premier élément du tableau
console.log(etudiants[0]);

//Affiche le dernier élément du tableau
console.log(etudiants[etudiants.length-1]);

//Boucle for pour afficher les éléments du tableau
for(let i=0;i<etudiants.length;i++){
    console.log("étudiant", etudiants[i]);
}

console.log(etudiants[0]);



//AJouter un élément a la fin du tableau
etudiants.push("Sophie");
//Ajouter un élément au début du tableau
etudiants.unshift("Jacques");
console.log(etudiants);

//Supprimer un élément à la fin du tableau
etudiants.pop();
//Supprimer un élément au début du tableau
etudiants.shift();
console.log(etudiants);