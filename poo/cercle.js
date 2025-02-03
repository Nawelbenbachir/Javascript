class Cercle {
    //Rayon du cercle
    constructor(rayon){
        this.rayon=rayon;
    }
    //Methodes:perimetre(),aire()
    aire(){
        return Math.PI*this.rayon**2;
    };

    perimetre(){
        return this.rayon*2*Math.PI;
    }
}

let c1=new Cercle(5);
console.log("Le périmètre de c1 est ",c1.perimetre());
console.log("L'aire de c1 est ",c1.aire());

let c2=new Cercle(10);
console.log("Le périmètre de c2 est ",c2.perimetre());
console.log("L'aire de c2 est ",c2.aire());