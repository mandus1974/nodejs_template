const funciones = require('./funciones');

function fnPost(res, body, schema, mensaje, fnCreacion)
{
    const { error, value } = schema.validate(body);      
    if(error){
      funciones.fnSchemeError_A01(res, error);
      return;
    }
    // -----------
    let resultado = fnCreacion(body);
    funciones.fnResultado_A01(res, resultado, mensaje);

}
 
module.exports = fnPost;
