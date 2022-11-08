const faker = require ('faker');

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

  create(data){
    const newBien = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.bienes.push(newBien);
    return newBien;
  }

  find(){
    return this.bienes;
  }

  findOne(id){
    return this.bienes.find(item => item.id === id);
  }

  update(){

  }

  delete(){

  }
}

module.exports = BienesService;
