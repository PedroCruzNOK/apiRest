const joi = require('joi');

const id = joi.string().uuid();
const nombre = joi.string().alphanum().min(3).max(50);
const apaterno = joi.string();
const amaterno = joi.string();
const dia = joi.string();
const mes = joi.string();
const ano = joi.string();
const correo = joi.string();
const telefono = joi.string();


const createUsersSchema = joi.object({
    nombre: nombre.required(),
    apaterno: apaterno.required(),
    amaterno: amaterno.required(),
    dia: dia.required(),
    mes: mes.required(),
    ano: ano.required(),
    correo: correo.required(),
    telefono: telefono.required()
});



module.exports = {createUsersSchema}