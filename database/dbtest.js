 //On crée un objet mysql à partir la librairie nodejs mysql qu'on vient d'installer avec la commande npm install mysql
 //ctrl c pour sortir car tourne en boucle 
 const mysql =require('mysql');

 //Variable pour créer la connection à la base
 const connexion= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database :'dbtest'
 });

 //Methode connect qui renvoi une variable r qui n'existe qu'en cas d'erreur 
 connexion.connect((err)=>{
    if (err) throw err;
        console.log('Connecté à la base de données MySQL');
 });

 //A partir d'ici on est connecté à la base de données MySQL
//paramètre avec la requête et paramètre avec une fonction qui se lance après exécution de la requête en cas d'erreur

 connexion.query('SELECT * FROM users',
    (err,rows)=> {
        if (err) throw err;
        console.log('Données reçues de dbtest:');
        //affiche sous forme de tableau 
        rows.forEach(row=>{
            console.log(row['id'], row['name'], row['email']);
        });
       // console.log(rows); pour afficher le contenu de la requête classiquement 
    }
);