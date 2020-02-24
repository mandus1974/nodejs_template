 
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

  async function modificarUsuario(where, body){  
      let usuario =  await Usuario.findOneAndUpdate(where, 
            {
                  $set : {
                        nombre : body.nombre,
                        password : body.password
                  }
            },
            {new : true}
      );
      return usuario;  
    };


async function desactivarUsuario(where, body){  
      let usuario =  await Usuario.findOneAndUpdate(where, 
            {
                  $set : {
                        status : false
                  }
            },
            {new : true}
      );
      return usuario;  
    };

  module.exports = {
                  crearUsuario : crearUsuario,
                  modificarUsuario : modificarUsuario,
                  desactivarUsuario : desactivarUsuario
  }

  