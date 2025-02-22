class Product {
  /**
   * @param {string} id
   * @param {string} title
   * @param {{currency: string, amount: number}} price
   * @param {string} picture
   * @param {string} condition
   * @param {boolean} free_shipping
   * @param {number} sold_quantity
   * @param {string} description
   */
  constructor(
    id,
    title,
    price,
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description
  ) {
    this.id = id
    this.title = title
    this.price = price
    this.picture = picture
    this.condition = condition
    this.free_shipping = free_shipping
    this.sold_quantity = sold_quantity
    this.description = description
  }
  author = {
    name: 'Mauro Alejandro',
    lastname: 'Pérez'
  }
}

class SearchResults {
  /**
   * @param {string[]} categories
   * @param {Array<{
   *  id: string,
   *  title: string,
   *  price: {currency: string, amount: number},
   *  picture: string,
   *  location: string,
   *  condition: string,
   *  free_shipping: boolean
   * }>} items
   */
  constructor(categories, items) {
    this.categories = categories
    this.items = items
  }
  author = {
    name: 'Mauro Alejandro',
    lastname: 'Pérez'
  }
}

module.exports = {
  SearchResults,
  Product
}
