const controllers = {}

//importar el modelo y sequelize
const producto = require('../model/Producto');
var sequelize = require('../model/database');
var Categoria = require('../model/Categoria');

controllers.create = async (req, res) => {

    const response = await sequelize.sync().then(function () {
        const { nombre, precio, cantidad, categoria } = req.body;
        producto.create({
            nombre: nombre,
            precio: precio,
            cantidad: cantidad,
            categoriaId: categoria

        });
        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response, mensaje: 'creado exitosamente' });
}




//este es para listare los datos
controllers.list = async (req, res) => {
    const { id } = req.body;
    //este es para buscar
    const data = await producto.findAll({
        where: { categoriaId: id }
    }).then(function (data) {
        return data;
    }).catch(error => { return error; });


    res.json({ success: true, data: data });

}

//metodo para eliminar producto
controllers.delete = async (req, res) => {
    //parametros del póst
    const { id } = req.body;
    //delete del sequelize

    const del = await producto.destroy({
        where: { id: id }
    });

    res.json({ success: true, deleted: del, mensaje: 'elimindado correctamente' });
}

controllers.update = async (req, res) => {

    const response = await sequelize.sync().then(function () {
        //parameter id get
        const { id } = req.params;
        const { nombre, precio, cantidad } = req.body;
        producto.update({
            nombre: nombre,
            precio: precio,
            cantidad: cantidad


        },
            { where: { id: id } });
        return data;
    }).catch(error => { return error; });
    res.json({ success: true, data: response, mensaje: 'Editado exitosamente' });
}

//este es para encontrar el valor
controllers.obtenerproducto = async (req, res) => {
    const { id } = req.body;
    //este es para buscar
    const data = await producto.findAll({
        where: { id: id }
    }).then(function (data) {
        return data;
    }).catch(error => { return error; });


    res.json({ success: true, data: data });

}

module.exports = controllers;