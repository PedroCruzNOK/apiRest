const express = require('express');
const BienesService = require('./../services/bienes.service');

const router = express.Router();
const service = new BienesService();

router.get('/', async (req, res) => {
  const bienes = await service.find();
  res.json(bienes);
})
router.get('/:id', async (req, res)=>{
  const { id } = req.params;
  const bien = await service.findOne(id);
  res.json(bien);
})

router.post('/',async (req, res)=> {
  const body = req.body;
  const newBien = await service.create(body);
  res.status(201).json(newBien);
});

router.patch('/:id', async(req, res)=> {
  try{
    const { id } = req.params;
    const body = req.body;
    const bien = await service.update(id, body);
    res.json(bien);
  } catch (error){
    res.status(404).json({
      message: error.message
    })
  }
  
});

router.put('/:id', (req, res)=> {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'actualizado',
    data: body,
    id
  });
});

router.delete('/:id', async (req, res)=> {
  try {
    const { id } = req.params;
    const rta = await  service.delete(id);
    res.json(rta);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

});

module.exports = router;
