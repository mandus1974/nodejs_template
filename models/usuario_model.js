const mongoose = require('mongoose');

const usuarioShema = new mongoose.Schema(
    {
        email: {type: String, required: true},
        nombre: {type: String, required: true},
        password: {type: String, required: true},
        estado: {type: Boolean, required: true},
        imagen: {type: String, required: false}
    }
);

usuarioShema.index({email:1},{unique:true});

module.exports =  mongoose.model('usuarios',  usuarioShema, collection="usuarios");


