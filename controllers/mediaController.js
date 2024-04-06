const Media = require('../models/media')
const {request, response} = require('express')

const obtenerMedias = async (req = request, res = response) => {
    try{
        const { estado } = req.query

    const medias = await Medias.find({ estado })

    return res.json(medias)

    }catch(e){
        return res.status(500).json({
            message: e
        })
    } 
}

const crearMedias = async (req = request, res = response) => {
    try{
        const body = req.body

        const media = new Media(body)

        await media.save()

        return res.status(201).json(media)
    
    }catch(e){
        return res.status(500).json({
            message: e
        })
    } 
}

const actualizarMedias = async (req = request, res = response) => {
        try{
            const id = req.params.id

            const body = req.body

            console.log(body)

            body.fechaActualizacion = new Date()

            const media = await Media.findByIdAndUpdate(id, body, {new: true})
            return res.status(201).json(media)

        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

const borrarMedias = async (req = request, res = response) => {
        try{
            const id = req.params.id

            await Media.findByIdAndDelete(id)

            return res.status(204).json({
                message: "Media borrada"
            })
    
        } catch(e){
            return res.status(500).json({
                message: e
            })
        }
}

module.exports = {
    obtenerMedias,
    crearMedias,
    actualizarMedias,
    borrarMedias
}