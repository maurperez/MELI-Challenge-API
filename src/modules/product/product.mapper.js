const { Product, SearchResults } = require("./product.entity")

function mapSearchResults(searchResults) {

  const getCategories = filters => {
    return filters.find(filter => filter.id === 'category').values.map(category => category.name)
  }

  const getItems = (results) => {
    return results.map(item => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.prices.presentation.display_currency,
        amount: item.price
      },
      condition: item.condition,
      free_shipping: item.shipping.free_shipping
    }))
  }
  
  return new SearchResults(
    getCategories(searchResults.filters),
    getItems(searchResults.results)
  )
}

function mapProduct(product, description) {
  return new Product(
    product.id,
    product.title,
    {currency: product.currency_id, amount: product.price},
    product.pictures[0].url,
    product.condition,
    product.shipping.free_shipping,
    description.plain_text
  )
}

module.exports = {
  mapProduct,
  mapSearchResults
}