const mongoose = require('mongoose')
const db_mongoose = require('../config/config_mongoose')
const Comentario = require('../model/nosql/Comentario')

mongoose.connect(db_mongoose.connection)
    .then(() => {
        console.log('Conectado com o BD')
    }).catch(() => {
        console.log("Erro ao conectar")
    })

    module.exports = {
        async getCreate(req, res) {
            new Comentario({
                titulo: req.body.titulo,
                text: req.body.texto,
                autor: req.body.autor
            }).save().then(() => {
                res.redirect('/home')
            }).catch((err) => {
                console.log(err)
            })
        },
        async getList(req, res) {
            await Comentario.find().then(comentarios => {
                res.render('comentario/comentarioList', {
                    comentarios: comentarios.map(coment => coment.JSON())
                }).catch((err) => {
                    console.log(err)
                })
            })
        }
    }