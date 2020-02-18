const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const debug = require('debug');


const usuarios = require('./routes/usuarios');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/usuarios', usuarios);


mongoose.connect("mongodb://localhost:27017/demo", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.log("No se pudo conectar", err));

app.listen(port, ()=>{
    console.log("API REST --- OK = ", port);
}); 



