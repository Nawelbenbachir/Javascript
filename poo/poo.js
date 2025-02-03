console.log("POO");

//Objet litteral 
let eleve = {
    prenom:"Nawel",
    nom:"Benbachir",
    age: 12,
    moyenne : 15,
    //Méthode
    afficher: function(){
        console.log(this.prenom,this.nom,this.age,this.moyenne);
    }
};
console.log(eleve.prenom);
console.log(eleve.nom);
console.log(eleve.age);
console.log(eleve.moyenne);
