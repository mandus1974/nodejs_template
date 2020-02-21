 
 const Usuario = require('../models/usuario_model');

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

  module.exports = crearUsuario;
  