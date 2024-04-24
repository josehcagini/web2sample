const routes = require('./router/route')
const handlebars = require('express-handlebars')
const express = require('express')
const app = express()

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.listen(8081, function(){
    console.log("Servidor http://localhost:8081")
})