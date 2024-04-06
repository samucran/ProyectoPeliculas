const {crearMedias,obtenerMedias,actualizarMedias,borrarMedias} = require('../controllers/mediaController')

const { Router } = require('express')

const router = Router()

router.get('/', obtenerMedias)

router.post('/', crearMedias)

router.put('/:id', actualizarMedias)

router.delete('/:id', borrarMedias)

module.exports = router