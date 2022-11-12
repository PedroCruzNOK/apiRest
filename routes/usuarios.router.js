
const express = require('express');
const UserService = require('../services/users.service.js');
const  validatorHandler = require('./../midlewares/validator.handlre');
const { createUsersSchema } = require('./../schemas/user.schema');


const router = express.Router();
const service = new UserService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
})

router.post('/', validatorHandler(createUsersSchema, 'body'),
  async (req, res)=> {  
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
});


module.exports = router;