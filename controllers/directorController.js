const Director = require('../models/director')
const {request, response} = require('express')

const obtenerDirectores = async (req = request, res = response) => {
    try{
        const { estado } = req.query

    const directores = await Director.find({ estado })

    return res.json(directores)

    }catch(e){
        return res.status(500).json({
            message: e
        })
    } 
}

const crearDirectores = async (req = request, res = response) => {
    try{
        const body = req.body

        const director = new Director(body)

        await director.save()

        return res.status(201).json(director)
    
    }catch(e){
        return res.status(500).json({
            message: e
        })
    } 
}

const actualizarDirectores = async (req = request, res = response) => {
        try{
            const id = req.params.id

            const body = req.body

            console.log(body)

            body.fechaActualizacion = new Date()

            const director = await Director.findByIdAndUpdate(id, body, {new: true})
            return res.status(201).json(director) 

        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

const borrarDirectores = async (req = request, res = response) => {
        try{
            const id = req.params.id

            await Director.findByIdAndDelete(id)

            return res.status(204).json({
                message: "Director borrado"
            })
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

module.exports = {
    obtenerDirectores,
    crearDirectores,
    actualizarDirectores,
    borrarDirectores
}