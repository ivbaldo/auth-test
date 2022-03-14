'use strict'

const bcrypt = require('bcrypt');
const moment = require('moment');

//encriptaPassword
//
// Devuelve un has con un salt incluido fromato
//formato del hash
// $2b$10$AD0nahh9wgPQZRvIZ2mw/Ogf.f0Y5DoV9Bmk3kugn9/CAvPpxVz6.
// algo cost        salt                    hash

function encriptaPassword(password){
    return bcrypt.hash(password, 10);
}

// comparaPassword
//Devolver verdadero o falso si coinciden o no el pass y hash

function comparaPassword(password, hash){
    return bcrypt.compare(password, hash);
}

module.exports = {
    encriptaPassword,
    comparaPassword
};
