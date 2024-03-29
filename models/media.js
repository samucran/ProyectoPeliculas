const { Schema, model } = require('mongoose')

const MediaSchema = Schema ({
    serial:{
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'Serial ya existente'],
        minLength: 2
    },
    titulo:{
        type: String,
        required: [true, 'Titulo requerido'],
        minLength: 2
    },
    sinopsis:{
        type: String,
        required: [true, 'Sipnosis requerido'],
        minLength: 2
    },
    url:{
        type: String,
        required: [true, 'Url requerido'],
        unique: [true, 'Url ya existente'],
        minLength: 2
    },
    imagen:{
        type: String,
        required: [true, 'Imagen requerida'],
        minLength: 1
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date
    },
    fechaEstreno: {
        type: Date
    },
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },
})

module.exports = model('Media', MediaSchema)