/*Créer une classe Contact :
- Propriétés/attributs --> nom,prenom,date de naissance,sexe,adresse,code postal,ville,telephone,email
- Méthodes --> afficher() qui affiche les infos du contact, mail qui envoie un mail au contact(affiche un msg ds la console "email envoyé")
Créer une collection(tableau) de 10 contacts basé sur la classe Contact
Afficher un listing des contacts
*/

class Contact{
    constructor(nom,prenom,date_naiss,sexe,adresse,code_postal,ville,telephone,email){
        this.nom=nom;
        this.prenom=prenom;
        this.date_naiss=date_naiss;
        this.sexe=sexe;
        this.adresse=adresse;
        this.code_postal=code_postal;
        this.ville=ville;
        this.telephone=telephone;
        this.email=email;
    }

    afficher(){
        console.log(this.nom,this.prenom,this.date_naiss,this.sexe,this.adresse,this.code_postal,this.ville,this.telephone,this.email);
    }
    mail(){
        var nodemailer = require('nodemailer');
        const smtp = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'benbachirnawel@gmail.com',
              pass: 'yourpassword'
            }
          });
        
          const mailOptions = {
            from: 'benbachirnawel@gmail.com',
            to: 'benbachirnawel@mail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          
          smtp.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
    
}

c1= new Contact("Dupont","Henri","25/10/1968","H","305 avenue gambetta","13005","Marseille","0654782310","henridupont@gmail.com");
c2= new Contact("Durandt","Bertrand","27/01/1987","H","74 avenue gambetta","68000","Mulhouse","0478521036","bertranddurand@gmail.com");
c3= new Contact("Dupuy","Gerard","25/10/1968","H","75 rue de la paix","92000","Paris","0654782310","dupuygerard@gmail.com");
c4= new Contact("Descartes","Bastien","15/03/1970","H","305 avenue gambetta","84200","Carpentras","05615165","desbas@gmail.com");
c5= new Contact("Benoit","Sylvie","14/01/2001","F","305 avenue gambetta","84000","AVignon","07548562","sylben@gmail.com");
c6= new Contact("Lambert","Nicolas","20/06/1988","H"," 5 Place de la Gare","67000","Strasbourg","0654782310","nicolas.lambert@email.com");
c7= new Contact("Morel","Emma","30/06/1982","F"," 22 rue de la Liberte","44000","NAntes","0653741289","emmmorel@email.com");
c8= new Contact("Lambert","Nicolas","20/06/1988","H"," 5 Place de la Gare","67000","Strasbourg","0654782310","nicolas.lambert@email.com");
c9= new Contact("Lefevre","Claire","05/01/1978","F","78 Boulevard HAusseman","75008","PAris","0654782310","lefevret@email.com");
c10= new Contact("Martin","Sophie","12/03/1985","F"," 45rue des Lilas","75012","PAris","0623456798","martin@email.com");

c1.mail();
// const table=[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10];
// table.forEach(contact=>contact.afficher());