// Notion d'héritage utile pour création d'une classe fenêtre par exemple qu'on peut réutiliser plusieurs fois en changeant certains paramètres dans des classes enfants

//Classe parent
class Animal {


    constructor(nom) {
      this.nom = nom;
    }
  
    NbPattes(n) {
      this.nbPattes = n;
    }
  
    couleur(c) {
      this.couleur = c;
    }
  
    parler() {
      console.log(this.nom + ' fait du bruit.');
    }
  
    afficher() {
      console.log('nom:', this.nom);
      console.log('Nombre de pattes:', this.nbPattes);
      }
  }
  
  //classes enfants qui étend la classe Animal de base 
  //Surcharge = on redéfinit différemment une méthode dans les classes enfants
  class chien extends Animal {
    constructor(nom){
        super( "chien " + nom); //constructeur de la classe parent qu'il exécute en rajoutant le mot chien devant le nom
    }
    nbPattes=4;
   parler(){
    console.log(this.nom+" fait woof");
   }
  }
  
  class chat extends Animal {
    nbPattes=4;

    parler(){
        console.log(this.nom+" fait miaou");
       }
  }
  
  class oiseau extends Animal{
    nbPattes=2;
    parler(){
        console.log(this.nom+" fait cuicui");
       }
  }
  
  
  
  let Rex = new chien('Rex');
 
  Rex.afficher();
  Rex.parler();
  
  let Felix = new chat('Felix');

  Felix.afficher();
  Felix.parler();

  let titi= new oiseau ("Titi");

  titi.afficher();
  titi.parler();