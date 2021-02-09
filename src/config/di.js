const {default: DIContainer, object, get, factory} = require('rsdi')
const { productAccessData, productController, productService } = require('../modules/product/product.module')

function addProductModuleDefinitions (container){
  container.addDefinitions({
    ProductController: object(productController).construct(get('ProductService')),
    ProductService: object(productService).construct(get('ProductAccessData')),
    ProductAccessData: object(productAccessData)
  })
}

module.exports = function configureDI(){
  const container = new DIContainer()
  addProductModuleDefinitions(container)
  console.log('Product Module configured');
}