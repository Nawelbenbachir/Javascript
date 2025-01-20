//Objet littéral
let rectangle={
    //Porpriétés de l'objet rectangle
    longueur:10,
    largeur:5,
    //Méthode de l'objet rectangle 
    aire: function (){
        return this.longueur*this.largeur;
    },
    perimetre: function(){
        return 2*(this.longueur+this.largeur);
    },
}
console.log("longueur",rectangle.longueur);
console.log("largeur",rectangle.largeur);
console.log("aire", rectangle.aire());
console.log("aire", rectangle.perimetre());