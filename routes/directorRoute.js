const {crearDirectores, obtenerDirectores,actualizarDirectores,borrarDirectores} = require('../controllers/directorController')

const { Router } = require('express')

const router = Router()

router.get('/', obtenerDirectores)

router.post('/', crearDirectores)

router.put('/:id', actualizarDirectores)

router.delete('/:id', borrarDirectores)

module.exports = router