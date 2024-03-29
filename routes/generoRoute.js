const {crearGeneros, obtenerGeneros,actualizarGeneros,borrarGeneros} = require('../controllers/generoController')

const { Router } = require('express')

const router = Router()

router.get('/', obtenerGeneros)

router.post('/', crearGeneros)

router.put('/:id', actualizarGeneros)

router.delete('/:id', borrarGeneros)

module.exports = router