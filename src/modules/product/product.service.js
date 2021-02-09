module.exports = class ProductService {
  constructor(productAccessData) {
    this.productAccessData = productAccessData
  }

  async search(query) {
    return this.productAccessData.search(query)
  }

  async getById(id) {
    return this.productAccessData.getById(id)
  }

  async getDescriptionById(id) {
    return this.productAccessData.getById(id)
  }
}
