//pour obtenir la valeur de pi: MAth.pi
let cercle={
    rayon:5,
    diametre:10,
    aire(){
        return Math.PI*this.rayon**2;
    },
    perimetre(){
        return this.rayon*2*Math.PI;
    }
}
console.log("rayon",cercle.rayon);
console.log("diametre",cercle.diametre);
console.log("aire",cercle.aire());
console.log("perimetre",cercle.perimetre());