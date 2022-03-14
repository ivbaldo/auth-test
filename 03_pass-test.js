'use strict'

const PassSservice = require('./services/pass.service');
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

//encriptamos el password---

PassSservice.encriptaPassword( usuario.password)
    .then( hash => {
        usuario.password = hash;
        console.log(usuario);

        //Verificamos el pass

        PassSservice.comparaPassword( miPass, usuario.password)
            .then(isOk => {
                if(isOk){
                    console.log('p1: El pass es correcta');
                }else{
                    console.log('p1: El pass es incorrecta');
                }
            })
            .catch(err => console.log(err));

            //Verificamos el pass contra un pass falso

        PassSservice.comparaPassword( badPass, usuario.password)
        .then(isOk => {
            if(isOk){
                console.log('p2: El pass es correcta');
            }else{
                console.log('p2: El pass es incorrecta');
            }
        })
        .catch(err => console.log(err));
    })