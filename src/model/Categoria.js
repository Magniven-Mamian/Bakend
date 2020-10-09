var Sequelize = require('sequelize');
var sequelize = require('./database');

var nametable = 'categoria';

var categoria = sequelize.define(nametable, {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING

    

});
module.exports=categoria;



