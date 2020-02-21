const mongoose = require('mongoose');




const usuarioShema = new mongoose.Schema(
    {
        email: {type: String, required: true},
        nombre: {type: String, required: true},
        password: {type: String, required: true},
        estado: {type: Boolean, required: false, default:true},
        imagen: {type: String, required: false},
        fec_creacion: {type:Date, required: false, default: Date()}
    }
);

usuarioShema.index({email:1},{unique:true});

module.exports =  mongoose.model('usuarios',  usuarioShema, collection="usuarios");


