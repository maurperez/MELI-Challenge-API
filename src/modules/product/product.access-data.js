module.exports = class ProductAccessData {
  constructor(baseUrl){
    this.baseUrl = baseUrl
  }

  async search(query){
    return fetch(`${this.baseUrl}/search?query=${query}`)
      .then(res => res.json())
      .then(products => {
        console.log(products)
      })
  }
}