const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const app = express()
const PORT = 8080
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
module.exports = io

// Public statement
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(session({
  store: MongoStore.create({ mongoUrl: "mongodb+srv://coderBackend:coderBackendPW@clustercoderbackend.tct9by1.mongodb.net/CookiesNSessions?retryWrites=true&w=majority" }),
  secret: 'myVeryVerySecretShhh',
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
      maxAge: 60000
  }
}))

const login = require('./controllers/userLoginController.js')
const productos = require('./controllers/productosController.js')
const testProductos = require('./controllers/testController.js')
require('./controllers/chatController.js')

app.use('/login', login)
app.use('/api/productos', productos)
app.use('/api/productos-test', testProductos)


app.get('/:file', (req, res) => {
  res.sendFile(__dirname + `/public/${req.params.file}`)
})

// Server up
httpServer.listen(PORT, () => console.log(`SERVER LISTENING IN PORT ${PORT}`))
