function fnPost(res, body, schema, mensaje, fnCreacion)
{
    const { error, value } = schema.validate(body);      
    if(error){
      res.send(error.details[0].message);
      debug(error.details[0].message);
      return;
    }
    // -----------
    let resultado = fnCreacion(body);
    resultado
         .then(user=>{
             res.send(mensaje);
             debug(mensaje);
           })
         .catch(err => 
         {
             res.status(400).send({error:err});
             debug(err);
         });       

}
 
module.exports = fnPost;
