'use strict'

const tokenService = require('./services/token_service');
const moment = require('moment');

//datos de simulacion
const miPass = "miContraseña";
const badPass = "miOtraConstraseña";
const usuario = {
    _id: '123456789',
    email: 'ibr24@alu.ua.es',
    displayName : 'ivan baldo',
    password: miPass,
    singUpDate: moment().unix(),
    lastLogin: moment().unix()
};

console.log(usuario);

//Creamos un token..
const token = tokenService.creaToken( usuario);
//console.log(token);

//Decodificar un token
tokenService.decodificaToken( token)
    .then( userId => {
        return console.log(`ID1: ${userId}`);
    })
    .catch( err => console.log(err));

//Decodificar un token erroneo
const badToken = 'EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
tokenService.decodificaToken( badToken)
    .then( userId => {
        return console.log(`ID2: ${userId}`);
    })
    .catch( err => console.log(err));
