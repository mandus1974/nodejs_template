const express = require('express');
const Usuario = require('../models/usuario_model');

const debug = require('debug')('app_debug');

const ruta = express.Router();

ruta.post('/', (req, res) => {
  
   debug("Paso 001");
   let body = req.body;
   let resultado = crearUsuario(body);
   debug("Paso 004");

   resultado
        .then(user=>{res.send("Añadido OK")})
        .catch(err => 
        {
            res.send({error:err})
        });
    debug("Paso 005");
   
});


async function crearUsuario(body){
  debug("Paso 002");
  debug(body);
  let usuario = new Usuario({
        email       :   body.email,
        nombre      :   body.nombre,
        password    :   body.password,
        estado    :   body.estado
  });
  usuario.nombre = body.nombre;
  debug("Paso 003");
  return await usuario.save();  
};

module.exports = ruta;