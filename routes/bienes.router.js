const express = require('express');
const BienesService = require('./../services/bienes.service');

const router = express.Router();
const service = new BienesService();

router.get('/', (req, res) => {
  const bienes = service.find();
  res.json(bienes);
})
router.get('/:id', (req, res)=>{
  const { id } = req.params;
  const bien = service.findOne(id);
  res.json(bien);
})

router.post('/', (req, res)=> {
  const body = req.body;
  const newBien = service.create(body);
  res.status(201).json(newBien);
});

router.patch('/:id', (req, res)=> {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'actualizado',
    data: body,
    id
  });
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

router.delete('/:id', (req, res)=> {
  const { id } = req.params;

  res.json({
    message: 'eliminado',
    id
  });
});

module.exports = router;
