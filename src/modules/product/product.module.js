const productController = require('./product.controller')
const productService = require('./product.service')
const productAccessData = require('./product.access-data')

function init(container){
  const controller = await container.get('ProductController')
  controller.configureRoutes()
}

module.exports = {
  init,
  productAccessData,
  productController,
  productService
}