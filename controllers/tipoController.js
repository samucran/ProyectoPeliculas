const Tipo = require('../models/tipo')
const {request, response} = require('express')

const obtenerTipos = async (req = request, res = response) => {
    try{
        const { estado } = req.query

    const tipos = await Tipo.find({ estado })

    return res.json(tipos)

    }catch(e){
        return res.status(500).json({
            message: e
        })
    } 
}

const crearTipos = async (req = request, res = response) => {
    try{
        const body = req.body

        const tipo = new Tipo(body)

        await tipo.save()

        return res.status(201).json(tipo)
    
    }catch(e){
        return res.status(500).json({
            message: e
        })
    } 
}

const actualizarTipos = async (req = request, res = response) => {
        try{
            const id = req.params.id

            const body = req.body

            console.log(body)

            body.fechaActualizacion = new Date()

            const tipo = await Tipo.findByIdAndUpdate(id, body, {new: true})
            return res.status(201).json(tipo) 

        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

const borrarTipos = async (req = request, res = response) => {
        try{
            const id = req.params.id

            await Tipo.findByIdAndDelete(id)

            return res.status(204).json({
                message: "Tipo borrado"
            })
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

module.exports = {
    obtenerTipos,
    crearTipos,
    actualizarTipos,
    borrarTipos
}