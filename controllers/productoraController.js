const Productora = require('../models/productora')
const {request, response} = require('express')

const obtenerProductoras = async (req = request, res = response) => {
    try{
        const { estado } = req.query

    const productoras = await Productora.find({ estado })

    return res.json(productoras)

    }catch(e){
        return res.status(500).json({
            message: e
        })
    } 
}

const crearProductoras = async (req = request, res = response) => {
    try{
        const body = req.body

        const productora = new Productora(body)

        await productora.save()

        return res.status(201).json(productora)
    
    }catch(e){
        return res.status(500).json({
            message: e
        })
    } 
}

const actualizarProductoras = async (req = request, res = response) => {
        try{
            const id = req.params.id

            const body = req.body

            console.log(body)

            body.fechaActualizacion = new Date()

            const productora = await Productora.findByIdAndUpdate(id, body, {new: true})
            return res.status(201).json(productora) 

        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

const borrarProductoras = async (req = request, res = response) => {
        try{
            const id = req.params.id

            await Productora.findByIdAndDelete(id)

            return res.status(204).json({
                message: "Productora borrada"
            })
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

module.exports = {
    obtenerProductoras,
    crearProductoras,
    actualizarProductoras,
    borrarProductoras
}