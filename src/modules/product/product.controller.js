module.exports = class ProductController {
  static BASE_URL = '/items'

  /**
   *
   * @param {import('express').Application} app
   * @param {*} productService
   */
  constructor(app, productService) {
    this.app = app
    this.productService = productService
  }

  configureRoutes() {
    this.app
      .route(ProductController.BASE_URL)
      .get('/', this.search.bind(this))
      .get('/:id', this.search.bind(this))
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
