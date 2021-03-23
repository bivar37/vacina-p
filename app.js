const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const path = require('path')

// body parser
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

//handlebars
app.engine('handlebars', handlebars({
	defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// Path
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
  res.render('index')
})

app.listen(8080, () => {
  console.log("servidor rodando na porta 8080")
})