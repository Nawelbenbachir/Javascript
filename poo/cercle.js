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
console.log(c1.perimetre());
console.log(c1.aire());

let c2=new Cercle(10);
console.log(c2.perimetre());
console.log(c2.aire());