const faker = require ('faker');
const boom = require('@hapi/boom');

class BienesService {

  constructor(){
    this.bienes = [];
    this.generate();
  }

  generate (){
    const limit = 50;
    for (let index = 0; index < limit; index++) {
      this.bienes.push({
        id: faker.datatype.uuid(),
        articulo: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
      });
    }
  }

  async create(data){
    const newBien = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.bienes.push(newBien);
    return newBien;
  }

  async find(){
    return this.bienes;
  }

  async findOne(id){
    const bien =  this.bienes.find(item => item.id === id);
    if (!bien) {
      throw boom.notFound('bien no encontrado');  
    }
    return bien;
  }

  async update(id, changes){
    const index = this.bienes.findIndex(item => item.id === id );
    if(index ===-1){
      throw boom.notFound('bien no encontrado');
    }
    const bien = this.bienes[index];
    this.bienes[index] = {
      ...bien,
      ...changes
    };
    return this.bienes[index];
  }

  async delete(id){
    const index = this.bienes.findIndex(item => item.id === id );
    if(index ===-1){
      throw boom.notFound('bien no encontrado');
    }
    this.bienes.splice(index, 1);
    return { id };

  }
}

module.exports = BienesService;
