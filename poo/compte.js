//Créer un objet compte qui correpond à un compte bancaire avec les propriétés : Client, Numéro de compte, Solde
//Et les méthode : afficher qui affiche toutes les propriétés du compte, crediter : qui ajoute un montant au solde, debiter : qui soustrait un montant au solde

let compte={
    client:'Dupont',
    numero_compte: '4587236545',
    solde: 789,
    afficher : function(){ //: function() n'est plus obligatoire
        console.log(this.client,this.numero_compte,this.solde);
    },
    crediter :function(montant){
        this.solde+=montant;
        return this.solde;
    },
    debiter: function(montant){
        this.solde-=montant;
        return this.solde;
    },
}

compte.afficher();
compte.crediter(100);
compte.afficher();
compte.debiter(200);
compte.afficher();