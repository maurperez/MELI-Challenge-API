const { mapSearchResults, mapProduct } = require("./product.mapper")

module.exports = class ProductService {
  constructor(productAccessData) {
    this.productAccessData = productAccessData
  }

  async search(query) {
    return mapSearchResults(await this.productAccessData.search(query))
  }

  async getById(id) {
    const [product, description] = await Promise.all([
      this.productAccessData.getById(id),
      this.productAccessData.getDescriptionById(id)
    ])

    return mapProduct(product, description)
  }
}
