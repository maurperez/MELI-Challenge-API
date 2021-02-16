const { Product, SearchResults } = require("./product.entity")

function mapSearchResults(searchResults) {

  const getCategories = filters => {
    return filters.find(filter => filter.id === 'category')?.values.map(category => category.name)
  }

  const getItems = (results) => {
    return results.map(item => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price
      },
      picture: item.thumbnail,
      location: item.address.state_name,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping
    }))
  }

  console.log(getCategories(searchResults.filters));
  
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
    product.sold_quantity,
    description.plain_text
  )
}

module.exports = {
  mapProduct,
  mapSearchResults
}