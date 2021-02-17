const fetch = require('node-fetch')

module.exports = class ProductAccessData {
  constructor() {
    this.meliApiEndpoint = process.env.MELI_API_URL
  }

  async search(query, limit) {
    return fetch(
      `${this.meliApiEndpoint}/sites/MLA/search?q=${query}&limit=${limit || 50}`
    )
      .then(res => res.json())
      .then(products => {
        return products
      })
  }

  async getById(id) {
    return fetch(`${this.meliApiEndpoint}/items/${id}`)
      .then(res => res.json())
      .then(product => {
        return product
      })
  }

  async getDescriptionById(id) {
    return fetch(`${this.meliApiEndpoint}/items/${id}/description`)
      .then(res => res.json())
      .then(productDescription => {
        return productDescription
      })
  }
}
