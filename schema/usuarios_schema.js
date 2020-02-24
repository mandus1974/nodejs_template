const Joi = require('@hapi/joi');

const usuarios_schema = Joi.object({
    nombre: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
  
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'mx'] } }),
  
    estado: Joi.boolean(),
  
    imagen: Joi.string()
  });
  
  module.exports = usuarios_schema;