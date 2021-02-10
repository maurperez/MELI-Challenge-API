require('dotenv').config()
const configureDependencyInjection = require('./config/di')
const { init: initProductModule } = require('./modules/product/product.module')
const express = require('express')

const app = express()
const container = configureDependencyInjection()

initProductModule(container, app)

const port = process.env.PORT || 8080
app.listen(port, console.log(`app listening on port ${port}`))
