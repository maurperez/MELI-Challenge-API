module.exports = class ProductService {
  constructor(productAccessData) {
    this.productAccessData = productAccessData
  }

  async search(query) {
    return this.productAccessData.search(query)
  }

  async getById(id) {
    const [product, description] = await Promise.all([
      this.productAccessData.getById(id),
      this.productAccessData.getDescriptionById(id)
    ])

    return {
      item: { ...product, description }
    }
  }
}
