const db = require('../config/config_sequelize')
const path = require('path')

module.exports = {
    async getLogin(req, res) {
        res.render('usuario/login', {layout: 'noMenu.handlebars'})
    },

    async postLogin(req, res){
        db.Usuario.findAll({
            where: {
                login: req.body.login, 
                senha: req.body.senha
            }
        })
        .then( usuario => {
            if(usuario.length > 0){
                res.render('home')
            } else {
                res.redirect('/')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    },
    async getCreate(req, res) {
        res.render('usuario/usuarioCreate')
    },
    async getList(req, res){
        db.Usuario.findAll()
        .then( (usuario) => {
            res.render(
                'usuario/usuarioList',
                {usuarios: usuario.map(user => user.toJSON())}
            )
        })
        .catch((err) => {
            console.log(err)
        })
    }
}