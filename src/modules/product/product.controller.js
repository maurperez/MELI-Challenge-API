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
    app.get(`${ProductController.BASE_URL}/:id`, this.getById.bind(this))
    app.get(ProductController.BASE_URL, this.search.bind(this))
  }

  async search(req, res) {
    const query = req.query.q
    if (query) {
      res.json(await this.productService.search(query))
    } else {
      res.status(400).end()
    }
  }

  async getById(req, res) {
    const id = req.params.id

    res.json(await this.productService.getById(id))
  }
}
