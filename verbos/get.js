const funciones = require('./funciones');

function fnGet(res, where, select, fnTraer, numeroPags, tamPags)
{        
    let resultado = fnTraer(where, select,  numeroPags, tamPags);
    funciones.fnDesplegar_A01(res, resultado);

}
 
module.exports = fnGet;
