let i=10; //Portée globale
let j=20;

function test(){
    i=30; //Déconseillé
    let j=50; //Portée locale à la fonction test
    for(let k=0;k<5;k++){
        console.log(k);
        let j =60;
    }
    //console.log(k); //k is not defined il n'existe que dans la boucle for
    console.log("i= "+i);
    console.log("j= "+j); //j=50 car le j=60 n'existe que dans la boucle for
}

test();
console.log("i= "+i);
console.log("j= "+j); //j=20 car c'est la variable globale