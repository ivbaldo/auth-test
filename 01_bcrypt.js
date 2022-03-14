'use strict'
//formato del hash
// $2b$10$AD0nahh9wgPQZRvIZ2mw/Ogf.f0Y5DoV9Bmk3kugn9/CAvPpxVz6.
// algo cost        salt                    hash
const { hash } = require('bcrypt');
const bcrypt = require('bcrypt');

// Datos para simulacion--

const miPass = "miContraseña";
const badPass = "miOtraConstraseña";

// salt = bcrypt.salt(10);
// hash = bcrypt.has( miPass,salt);
// db.users.update(id,hash);
// db.account.hash.update(id, salt);

//Creamos el salt
bcrypt.genSalt(15, (err,salt) => {
    console.log(`Salt 1: ${salt}`);


    //utilizamos el salt para generar un hash
    bcrypt.hash( miPass, salt, (err,hash) =>{
        if(err) console.log(err);
        else console.log(`Hash 1: ${hash}`);
    });
});


//creamos el hash directamente
bcrypt.hash(miPass, 10, (err,hash) => {
    if(err) console.log(err);
    else {
        console.log(`hash 2: ${hash}`);

        //comprobamos utilizando la contraseña correcta
        bcrypt.compare(miPass, hash, (err, result) => {
            console.log(`resultado 2.1:${result}`);
        });

        //comprobamos utilizando la contraseña incorrecta
        bcrypt.compare(miPass, badPass, (err, result) => {
            console.log(`Result 2.2: ${result}`);
        });
    }
});