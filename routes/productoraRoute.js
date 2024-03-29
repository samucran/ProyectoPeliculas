const {crearProductoras, obtenerProductoras,actualizarProductoras,borrarProductoras} = require('../controllers/productoraController')

const { Router } = require('express')

const router = Router()

router.get('/', obtenerProductoras)

router.post('/', crearProductoras)

router.put('/:id', actualizarProductoras)

router.delete('/:id', borrarProductoras)

module.exports = router