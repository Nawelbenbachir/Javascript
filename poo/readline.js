const readline= require("node:readline");
//require intègre le module en paramètre dans le projet

const rl=readline.createInterface({
    input:process.stdin, //stdin = input
    output:process.stdout, //stdout= output
});

rl.question("Whats your name?",function(saisie){ //fonction qui console.log dans la fonction qui crée l'interface
    console.log(`Hi ${saisie}`); //saisie est le input récupéré
    rl.close(); //ferme l'interface
});