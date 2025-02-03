
// // commande node +nom du fichier dans le terminal pour executer
// console.log('tableaux.js');

// //Déclaration d'un tableau 
// let tableau=[1,22,13,42,45];
// //Variante
// //let tableau2 = new Array ('a','b','c','d','e');

// //Taille d'un tableau
// let taille= tableau.length;
// console.log("Taille = "+taille);

// //Accéder à un élément du tableau 
// let a= tableau[0]; //A=1
// let b= tableau[1]; //B=22
// let dernier= tableau[tableau.lenght-1]; //Dernier=45

// //Modifier un élément du tableau 
// tableau[0]=2;

// //Ajouter un élément à la fin du tableau 
// tableau.push(99);

// //Ajouter un élément au début du tableau 
// tableau.unshift(25);

// //2 méthodes pour parcourir un tableau :
// //Boucle for
// console.log("Boucle for")
// for(let i=0; i<tableau.length; i++){
//     console.log(tableau[i]);
// }

// //Supprimer un élément du tableau 
// tableau.splice(2,1); //Supprime 1 élément à partir l'indice 2

// //Supprimer le dernier élément du tableau 
// tableau.pop();

// // //Supprimer le premier élément du tableau
// // tableau.shift();

// // //Boucle forEach
// // console.log("Boucle forEach")

// // tableau.forEach(                    //On execute la fonction pour chaque élément du tableau
// //     function(element,index){        //index facultatif pour numéroter les éléments
// //         console.log(index,element);
// //     }
// // );

// // //Variante de forEach avec fonction fléchée
// // tableau.forEach((element,index) => console.log(index,element));

function tri(tableau){
    let k=0;
    for(let i=0;i<=tableau.lenght;i++){
        for (let j=1; j<tableau.lenght;j++){

        k=tableau[j];
        tableau[j]=tableau[i];
        tableau[i]=k;
        }
    }

    return tableau;
}
tableau=[5,84,15,65,25,74];
tri(tableau);