const funciones = require('./funciones');

function fnPut(where, res, body, schema, mensaje, fnModificar)
{
    const { error, value } = schema.validate(body);      
    if(error){
      funciones.fnSchemeError_A01(res, error);
      return;
    }
    // -----------
    let resultado = fnModificar(where, body);
    
    funciones.fnResultado_A01(res, resultado, mensaje);

}
 
module.exports = fnPut;
