//Créer une classe contact avec comme propriétés: nom, prénom, date de naissance
//methode : afficher qui affiche les infos du contact
//heriter une classe employée avec comme propriétés supplémentaires salaire et ancienneté 
//methode : augmenter salaire qui va ajouter 10% si ancienneté plus grande que 10 ans et afficher avec le salaire

class Contact {
    constructor(nom,prenom,date_naissance){
        this.nom =nom;
        this.prenom=prenom;
        this.date_naissance=date_naissance
    }
    afficher(){
        console.log(`nom:${this.nom},prenom: ${this.prenom},date de naissance:${this.date_naissance}`);
    }
}

class Employee extends Contact {
    constructor(nom,prenom,date_naissance,salaire,anciennete){
        super(nom,prenom,date_naissance,salaire);
        this.salaire=salaire;
        this.anciennete=anciennete;
    }
    afficher(){
        super.afficher();
        console.log(`salaire:${this.salaire}, anciennete: ${this.anciennete}`);
    }
    augmenter(){
        if (this.anciennete>10) {
            this.salaire=this.salaire+this.salaire*0.10;
        }
    }

}

let Benoit= new Employee ("Benoit")
Benoit.nom="Dupont";
Benoit.prenom="Benoit";
Benoit.date_naissance="26/10/85";
Benoit.salaire=1800;
Benoit.anciennete=12;
Benoit.afficher();
Benoit.augmenter();
Benoit.afficher();