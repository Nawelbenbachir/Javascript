//Créer 3 variables i,j,k et leur affecter des valeurs numériques
let i=4;
let j=5;
let k=6;
//Additionner les 3 variables et afficher le résultat
let somme=i+j+k;
console.log('i+j+k=',somme);
//Créer 3 variables x,y,z  et leur affecter des valeurs numériques
let x=2;
let y=4;
let z=6;
//Afficher x+y*z
console.log(x,'+',y,'*',z,'=',(x+y)*z)
//Afficher x*y+Z
console.log(x,'*',y,'+',z,'=',x*y+z)
//Afficher x-y*z
console.log(x,'-',y,'*',z,'=',x-y*z)
//Afficher x/y+z
console.log(x,'/',y,'*',z,'=',x/y*z)

//Déclarer 2 variables a et b et leur affecter des valeurs numériques
let a=5;
let b=10;
//Déterminer si la première variable est divisible par la deuxieme

let divisible= (a%b==0); //renvoie vraie ou faux 

//Afficher le résultat en utilisant une condition if...else
if(a%b==0)
    console.log("a=",a, "est divisible par b=",b);

else

    console.log('a=',a," n'est pas divisible par b=",b);