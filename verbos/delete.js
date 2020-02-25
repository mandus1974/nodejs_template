const funciones = require('./funciones');

function fnDelete(where, res, mensaje, fnModificar)
{
    /* const { error, value } = schema.validate(body);      
    if(error){
      funciones.fnSchemeError_A01(res, error);
      return;
    } */
    // -----------
    let resultado = fnModificar(where);
    
    funciones.fnResultado_A01(res, resultado, mensaje);

}
 
module.exports = fnDelete;
