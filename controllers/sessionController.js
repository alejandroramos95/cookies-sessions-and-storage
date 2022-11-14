const express = require('express')
const router = express.Router()

// Ingreso de usuario en /login.html
router.post('/login.html', (req, res) => {
  req.session.userName = req.body.nombreUsuario
  //console.log('hola1', req.session.userName)
  //console.log('hola2', req.session.cookie)
  res.redirect('/')
})

// Eliminar sesion al desloguear
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.json({ status: 'Logout ERROR', body: err })
    }
    //console.log("Deslogueo exitoso.")
    res.redirect("/logout.html")
  }) 
})

module.exports = router
