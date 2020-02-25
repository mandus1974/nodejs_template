 
 const Usuario = require('../models/usuario_model');
 const debug = require('debug')('app_debug');

 // Funcines de Usuario
 async function traerUsuarios(where, select, numeroPags, tamPags){  
      let usuarios = await Usuario
                  .find(where)
                  .select(select)
                  .skip((numeroPags - 1) * tamPags)
                  .limit(tamPags);
      return usuarios;  
    };

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


async function desactivarUsuario(where){  
      debug("==== Dentro de: desactivarUsuario ");      
      debug("where = " + JSON.stringify(where));      
      let usuario =  await Usuario.findOneAndUpdate(where, 
            {
                  $set : {
                        estado : false
                  }
            },
            {new : true}
      );
      return usuario;  
    };

  module.exports = {
                  crearUsuario : crearUsuario,
                  modificarUsuario : modificarUsuario,
                  desactivarUsuario : desactivarUsuario,
                  traerUsuarios : traerUsuarios
  }

  