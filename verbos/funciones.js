const debug = require('debug')('app_debug');


function fnResultado_A01(res, resultado, mensaje)
{
    resultado
            .then(valor=>{
                
                res.json({
                    mensaje : mensaje,
                    valor : valor
                });             
            })
            .catch(err => 
            {
                debug(err);
                res.status(400).json({error:err});
                
            });  
}


function fnSchemeError_A01(res, error) {
    res.send(error.details[0].message);
    debug(error.details[0].message);
}

// -----------------------------
module.exports = {
    fnResultado_A01 : fnResultado_A01,
    fnSchemeError_A01 : fnSchemeError_A01
}
