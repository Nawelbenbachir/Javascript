//1. creer un tableau avec les 6 prénoms de la classe
let prenom= ['Yoann', 'Nawel','Yassine', 'Anas', 'Badr', 'Ulysse', 'Bryan'];

//2.Afficher la liste des élèves avec une boucle

// prenom.forEach(
//     function(prenom,i){
//         console.log(i+1,prenom);
//     }
// );

//Version fléchée
//prenom.forEach((prenom,i)=>(i+1,prenom));

//3. Faire passer le dernier élève de la liste au debut de la liste 

// let dernier=prenom[prenom.length-1];
// prenom.pop();
// prenom.unshift(dernier);

//Version améliorée
// prenom.unshift(prenom.pop()); //pop renvoi la valeur de l'élément supprimé

// prenom.forEach(
//     function(prenom,i){
//         console.log(i+1,prenom);
//     }
// );

//4. Faire passer le premier élève à la fin 

// prenom.push(prenom.shift());

// prenom.forEach(
//     function(prenom,i){
//         console.log(i+1,prenom);
//     }
// );

//5.Inverser les deux premiers élèves de la liste

let eleve1=prenom[0];
let eleve2=prenom[1];
prenom[0]=eleve2;
prenom[1]=eleve1;

prenom.forEach(
    function(prenom,i){
        console.log(i+1,prenom);
    }
);
