//Déclarer une fonction abs qui prend un paramètre nb et retourne sa valeur absolue

function abs(nb){
    //Conidtion ternaire
    //return nb<0 ? -nb : nb  Condition ? si vrai : si faux
    if (nb<0) nb=-nb;
    return nb;
}

console.log(abs(-5));
console.log(abs(0));
console.log(abs(5));