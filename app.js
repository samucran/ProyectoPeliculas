const express = require('express')
const { mongoConection } = require('./databases/config')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')

mongoConection()

app.use(cors({
    origin: '*'
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const generos = require('./routes/generoRoute')
const directores = require('./routes/directorRoute')
const productoras = require('./routes/productoraRoute')
const tipos = require('./routes/tipoRoute')

app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/productoras', productoras)
app.use('/api/v1/tipos', tipos)

app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'No encontrado',
        status: 404
    })
})

module.exports = app