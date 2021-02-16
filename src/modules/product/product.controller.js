module.exports = class ProductController {
  /**
   *
   * @param {import('express').Application} app
   * @param {*} productService
   */
  constructor(productService) {
    this.BASE_URL = '/api/items'
    this.productService = productService
  }

  configureRoutes(app) {
    app.get(`${this.BASE_URL}/:id`, this.getById.bind(this))
    app.get(this.BASE_URL, this.search.bind(this))
  }

  async search(req, res) {
    const {q, limit} = req.query
    if (query) {
      res.json(await this.productService.search(q, limit))
    } else {
      res.status(400).end()
    }
  }

  async getById(req, res) {
    const id = req.params.id

    res.json(await this.productService.getById(id))
  }
}
