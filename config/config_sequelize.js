const Sequelize = require('sequelize');
const sequelize = new Sequelize('web2_db', 'postgres', 'postgres',{
    host:'localhost', dialect: 'postgres'
})

var db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Usuario = require('../model/relational/usuario.js')(sequelize, Sequelize)
db.Receita = require('../model/relational/receita.js')(sequelize, Sequelize)
db.Categoria = require('../model/relational/categoria.js')(sequelize, Sequelize)

db.Categoria.hasMany(db.Receita,{
    foreignKey: 'categoriaId', onDelete: 'NO ACTION'
})

module.exports = db;