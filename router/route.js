const express = require('express')
const db = require('../config/config_sequelize')
const controllerUsuario = require('../controller/controllerUsuario')
const controllerComentario = require('../controller/controllerComentario')
const route = express.Router();

db.sequelize.sync({force: true})
    .then(() =>{
        console.log('force: true')
    })

db.Usuario.create({login:'admin', senha: '1', tipo:1})

module.exports = route

route.get("/home", function(req, res){ res.render('home')} )

route.get('/', controllerUsuario.getLogin)
route.post("/login", controllerUsuario.postLogin)
route.get("/usuarioCreate", controllerUsuario.getCreate)
route.post("/usuarioCreate", controllerUsuario.postCreate)
route.get("/usuarioList", controllerUsuario.getList)

route.get("/comentarioCreate", controllerComentario.getCreate)
route.post("/comentarioCreate", controllerComentario.postCreate)
route.get("/comentarioList", controllerComentario.getList)
