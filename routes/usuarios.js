const express = require('express');

// import
const usuario_db = require('../db/usuarios_db.js');
const fnPost = require('../verbos/post.js');
const fnPut = require('../verbos/put.js');
const fnDelete = require('../verbos/delete.js');
const fnGet = require('../verbos/get.js');
const usuarios_schema = require('../schema/usuarios_schema.js');
const usuarios_mensajes = require('../mensajes/usuarios_mensajes.js');

const debug = require('debug')('app_debug');

const ruta = express.Router();

ruta.get('/', (req, res) => {          
   debug("==== Denro de get");   
   debug(req.query);   
   var numeroPags = parseInt(req.query.numeroPags);
   var tamPags = parseInt(req.query.tamPags);
   var where = {estado:true};
   var select = {email:1, nombre:1};
   fnGet(res, where, select, usuario_db.traerUsuarios, numeroPags, tamPags);
});

ruta.get('/count', (req, res) => {          
   debug("==== Denro de get/count");      
   for(var element in req.query)
      console.log(element);
      console.log(req.query[element]);
   var where = {estado:true};   
   res.send("Contador");
   //fnGet(res, where, select, usuario_db.traerUsuarios, numeroPags, tamPags);
});


ruta.post('/', (req, res) => {       
   debug("==== Denro de post");
   debug(req.body);
   mensaje = usuarios_mensajes.post.correcto + " = " + req.body.email;
   fnPost(res, req.body, usuarios_schema, mensaje, usuario_db.crearUsuario);
});

ruta.put('/:email', (req, res) => {       
  debug("==== Denro de put");
  debug(req.params);
  debug(req.body);
  const mensaje = usuarios_mensajes.put.correcto + " = " + req.params.email;
  fnPut({email:req.params.email}, res, req.body, usuarios_schema, 
                                mensaje, usuario_db.modificarUsuario);        
});

ruta.delete('/:email', (req, res) => {       
   debug("==== Denro de delete");
   debug(req.params);   
   const mensaje = usuarios_mensajes.delete.correcto + " = " + req.params.email;  
   debug(" Antes de fnDelete") 
   fnDelete({email:req.params.email}, res, mensaje, usuario_db.desactivarUsuario);        
 });
 



module.exports = ruta;