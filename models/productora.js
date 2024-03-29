const { Schema, model } = require('mongoose')

const ProductoraSchema = Schema ({
    nombre:{
        type: String,
        required: [true, 'Nombre requerido'],
        unique: [true, 'Productora existente'],
        minLength: 2
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    },
    slogan: {
        type: String
    },
    descripcion: {
        type: String
    }
})

module.exports = model('Productora', ProductoraSchema)