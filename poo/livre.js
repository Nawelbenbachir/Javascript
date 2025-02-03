//Objet livre avec titre auteur nb de page methode afficher, estLong qui retourne true si livre fait plus de 300 pages, emprunter() qui renvoi "le livre a été/n'a pas ete emrpunté", rendre() qui renvoi "Le livre a été rendu/n'a pas ete rendu" si le livre a été emprunter
let livre={
    auteur:'Camus',
    nb_page:600,
    emprunte:true,
    rendu:false,
    afficher:function(){
        console.log(this.auteur, this.nb_page);
    },
    estLong:function(){
        if(this.nb_page>300) 
            return "Le livre fait plus de 300 pages";
        else
            return "Le livre fait moins de 300 pages"
        
    },
    emprunter: function(){
        if (this.emprunte==true){
            return "Le livre a été emprunté";
            this.emprunte=false;
        }
        else{
            return "Le livre n'a pas été emprunté";
        }
    },
    rendu: function(){
        if (this.emprunte==false && this.rendu==true)
            return"Le livre a été rendu";
        else
            return"Le livre n'a pas été rendu";
    }
};

console.log(livre.emprunter());
console.log(livre.estLong());
console.log(livre.rendu());