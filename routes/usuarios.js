const express = require('express');
const Joi = require('@hapi/joi');
const Usuario = require('../models/usuario_model');

const debug = require('debug')('app_debug');

const ruta = express.Router();

// Validacion de cadena de usuario

const schema = Joi.object({
  nombre: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

  password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'mx'] } }),

  estado: Joi.boolean(),

  imagen: Joi.string()
});

ruta.post('/', (req, res) => {       
   let body = req.body;
   // Validar Formato de Daots   
   const { error, value } = schema.validate(body);      
   if(error){
     res.send(error.details[0].message);
     debug(error.details[0].message);
     return;
   }
   // -----------
   let resultado = crearUsuario(body);
   resultado
        .then(user=>{
            res.send("Añadido OK");
            debug("Usiario Añadido = ", body.email);
          })
        .catch(err => 
        {
            res.status(400).send({error:err});
            debug(err);
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