var Sequelize = require('sequelize');
var sequelize = require('./database');
var Categoria=require('./Categoria');
var nametable = 'producto';

var producto = sequelize.define(nametable, {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    precio: Sequelize.INTEGER,
    cantidad:Sequelize.INTEGER, 
    //LLAVE FORANEA 
    categoriaId:{
        type:Sequelize.INTEGER,
        //esta es una referencia para nombrar el modelo
        references:{
            model:Categoria,
            key: 'id'
        }

    }



});
producto.belongsTo(Categoria);
module.exports = producto;