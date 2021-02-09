module.exports = class ProductAccessData {
  constructor(baseUrl){
    this.baseUrl = baseUrl
  }

  async search(query){
    return fetch(`${this.baseUrl}/sites/MLA/search?query=${query}`)
      .then(res => res.json())
      .then(products => {
        return products
      })
  }

  async getById(id){
    return fetch(`${this.baseUrl}/items/${id}`)
      .then(res => res.json())
      .then(product => {
        return product
      })
  }

  async getDescriptionById(id){
    return fetch(`${this.baseUrl}/items/${id}/description`)
      .then(res => res.json())
      .then(productDescription => {
        return productDescription
      })
  }
}