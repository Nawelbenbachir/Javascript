//Objet livre avec titre auteur nb de page methode afficher, estLong qui retourne true si livre fait plus de 300 pages, emprunter() qui renvoi "le livre a été/n'a pas ete emrpunté", rendre() qui renvoi "Le livre a été rendu/n'a pas ete rendu" si le livre a été emprunter
let livre={
    auteur:'Camus',
    nb_page:600,
    disponible:false,
    afficher:function(){
        console.log(this.auteur, this.nb_page);
    },
    estLong:function(){
            return this.nb_page>300;
        
    },
    emprunter: function(){
        if (!this.disponible){ 
            this.disponible=true;
            return "Le livre a été emprunté";
           
        }
        else{
            return "Le livre n'a pas été emprunté";
        }
    },
    rendre: function(){
        if (this.disponible)
            return"Le livre a été rendu";
        else
            return"Le livre n'a pas été rendu";
    }
};

console.log(livre.estLong());
console.log(livre.emprunter());
console.log(livre.rendre());