const controllers = {}

//importar el modelo y sequelize
const categoria = require('../model/Categoria');
var sequelize = require('../model/database');


controllers.create = async (req, res) => {

    

    const response = await sequelize.sync().then(function () {
        const { nombre} = req.body;
        categoria.create({
            nombre: nombre            
        });

        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response, mensaje:'creado exitosamente' });
}



controllers.list = async (req, res) => {

    

    const response = await sequelize.sync().then(function () {
        
        const data = categoria.findAll();
        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response, mensaje:'creado exitosamente' });
}


module.exports = controllers;