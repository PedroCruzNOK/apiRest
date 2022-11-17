const express = require('express');
const UserService = require('../services/user.service');
const  validatorHandler = require('../midlewares/validator.handlre');
const{updateUserSchema,createUserSchema}=require('../schemas/user.schema');



const router = express.Router();
const service = new UserService();

router.get('/',async(req,res,next)=>{
  try{
    const users=await service.find();
    res.json(users);
  }
  catch(error)
  {
    next(error);
  
  }});

router.post('/', validatorHandler(createUserSchema, 'body'),
  async(req,res,next)=>{
    try{
      const body= req.body;
      const newCategory = await service.create(body);

      res.status(201).json(newCategory);
    }
    catch(error){
      next(error);
    
    }
  }
);



module.exports = router;