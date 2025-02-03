//Permet de créer plusieurs objets avec les mêmes propriétés
//Première lettre en majuscule pour une classe
class Livre{
    constructor(titre,auteur,nbPages,disponibilite){
        this.titre=titre;
        this.auteur=auteur;
        this.nbPages=nbPages;
        this.disponibilite= disponibilite;
    }
    afficher(){
        console.log(this.titre, this.auteur, this.nbPages, this.disponibilite);
    }

}

//livre1 est une instance de la classe livre
//livre1 est une variable objet crée à partir de la classe livre
let livre1 = new livre("Le seigneur des anneaux","Tomkien",1000,true);
let livre2 = new livre("Oui Oui fait du velo","Dupont",152,false);
let livre3 = new livre("Le guide du routard","Durand",357,true);
// livre1.afficher();
// livre2.afficher();
// livre3.afficher();

// //On peut modifier les propriétés de chaque objet
// livre1.nbPages=500;
// livre1.disponibilite=false;
// livre1.afficher();

const bibliotheque=[livre1,livre2,livre3];
//boucle for pour parcourir le tableau (ancienne méthode)
for(let i=0;i<bibliotheque.length;i++){
    bibliotheque[i].afficher();
}
//nouvelle méthode forEach
bibliotheque.forEach(function(livre){livre.afficher()});

//équivalent fléché 
bibliotheque.forEach(livre=>livre.afficher());