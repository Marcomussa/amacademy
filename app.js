const express = require('express')
const app = express()
const PORT = 3000
const router = require('./src/routes/router')
const path = require('path')

app.set('view engine', 'ejs');

app.set('views', path.resolve(__dirname, './public/views'))

app.use(express.static(path.resolve(__dirname, './public')))

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

app.use('/', router)

console.log(path.resolve(__dirname, 'views'))

app.listen(PORT, () => console.log(`Server on Port: ${PORT}`))