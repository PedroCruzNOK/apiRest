const joi = require('joi');

const id = joi.string().uuid();
const articulo = joi.string().alphanum().min(3).max(50);
const descripcion = joi.string();


const createBienesSchema = joi.object({
    articulo: articulo.required(),
    descripcion: descripcion.required()
});

const updateBienesSchema = joi.object({
    articulo: articulo.required(),
    descripcion: descripcion
    
})

module.exports = {createBienesSchema, updateBienesSchema}