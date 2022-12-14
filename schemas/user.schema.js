const joi = require('joi');
const id = joi.number().integer();
const email = joi.string().email();
const password = joi.string().min(8);
const role = joi.string();



const createUserSchema = joi.object({
    email: email.required(),
    password: password.required(),
    role: role.required()
});

const updateUserSchema = joi.object({
    email: email.required(),
    
    
})

const getUserSchema= joi.object({id:id.required(),});

module.exports = {createUserSchema, updateUserSchema, getUserSchema}