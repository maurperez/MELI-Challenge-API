const productController = require('./product.controller')
const productService = require('./product.service')
const productAccessData = require('./product.access-data')

function init(container, app) {
  const controller = container.get('ProductController')
  controller.configureRoutes(app)
}

module.exports = {
  init,
  productAccessData,
  productController,
  productService
}
