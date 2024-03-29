const {crearTipos, obtenerTipos,actualizarTipos,borrarTipos} = require('../controllers/tipoController')

const { Router } = require('express')

const router = Router()

router.get('/', obtenerTipos)

router.post('/', crearTipos)

router.put('/:id', actualizarTipos)

router.delete('/:id', borrarTipos)

module.exports = router