const express = require('express');
const joi = requiere('')
const Usuario = require('../models/usuario_model');

const debug = require('debug')('app_debug');

const ruta = express.Router();

ruta.post('/', (req, res) => {     
   let body = req.body;
   // Validar Formato de Daots

   // -----------
   let resultado = crearUsuario(body);
   resultado
        .then(user=>{
            res.send("Añadido OK");
            console.log("Usiario Añadido = ", body.email);
          })
        .catch(err => 
        {
            res.send({error:err})
        });       
});


// Funcines de Usuario
async function crearUsuario(body){  
  let usuario = new Usuario({
        email       :   body.email,
        nombre      :   body.nombre,
        password    :   body.password,
        estado    :   body.estado
  });  
  usuario.nombre = body.nombre;  
  return await usuario.save();  
};

module.exports = ruta;