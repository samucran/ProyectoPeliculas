const Genero = require('../models/genero')
const {request, response} = require('express')

const obtenerGeneros = async (req = request, res = response) => {
    try{
        const { estado } = req.query

    const generos = await Genero.find({ estado })

    return res.json(generos)

    }catch(e){
        return res.status(500).json({
            message: e
        })
    } 
}

const crearGeneros = async (req = request, res = response) => {
    try{
        const body = req.body

        const genero = new Genero(body)

        await genero.save()

        return res.status(201).json(genero)
    
    }catch(e){
        return res.status(500).json({
            message: e
        })
    } 
}

const actualizarGeneros = async (req = request, res = response) => {
        try{
            const id = req.params.id

            const body = req.body

            console.log(body)

            body.fechaActualizacion = new Date()

            const genero = await Genero.findByIdAndUpdate(id, body, {new: true})
            return res.status(201).json(genero) 

        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

const borrarGeneros = async (req = request, res = response) => {
        try{
            const id = req.params.id

            await Genero.findByIdAndDelete(id)

            return res.status(204).json({
                message: "Genero borrado"
            })
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

module.exports = {
    obtenerGeneros,
    crearGeneros,
    actualizarGeneros,
    borrarGeneros
}