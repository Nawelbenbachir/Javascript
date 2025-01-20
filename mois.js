function mois(i){

    //Retourner la chaîne de caractère correspondant au mois numérique demandé
    //En utilisant un tableau
    tableau=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
    if (i<=12){
        return (tableau[i-1]);
    }
        return "";
}
console.log(mois(13));