const { Schema, model } = require('mongoose')

const TipoSchema = Schema ({
    nombre:{
        type: String,
        required: [true, 'Nombre requerido'],
        unique: [true, 'Nombre ya existente'],
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
    descripcion: {
        type: String
    }
})

module.exports = model('Tipo', TipoSchema)