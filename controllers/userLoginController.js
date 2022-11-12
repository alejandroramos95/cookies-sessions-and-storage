const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {
const userLog = req.body.nombreUsuario
console.log('hola', userLog)
res.redirect('/')
})

module.exports = router
