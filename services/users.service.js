const faker = require ('faker');
const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'http://data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com/',
    database:'testing_ali_fullstack',
    user:'testing',
    password:'Pruebas%ALI%2020'
});
conexion.connect(function(error){
    if(error){
        throw error;

    }else{
        console.log('exito conection')
    }
});

class UsersService {

    constructor(){
        this.users = [];
    }

    async find(){
        return this.users;
    }

    async create(data){
        const newUser = {
        id: faker.datatype.uuid(),
        ...data
        }
        this.users.push(newUser);
        return newUser;
    }
}


conexion.end();
module.exports = UsersService;
