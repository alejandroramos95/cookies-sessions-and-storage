const express = require('express')
const router = express.Router()

// Ingreso de usuario en /login.html
router.post('/login', (req, res) => {
  req.session.userName = req.body.nombreUsuario
  res.redirect('/main')
})

// Eliminar sesion al desloguear
router.get('/logout', (req, res) => {
  console.log('holaestoyaca')
  req.session.destroy((err) => {
    if (err) {
      return res.json({ status: 'Logout ERROR', body: err })
    }
  })
  res.redirect('/login')
})

module.exports = router
