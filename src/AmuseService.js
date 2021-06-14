import { Product } from './Product'
import products from './products.json'

export const AmuseService = {

  /**
   * With more time I'd introduce a backend pagination to only load 50 or a 100 products at a time
   * then implement either lazy loading on scroll or actual pagination feature
   */
  getProducts: async () => {
    return await products.map(product => new Product(product))
  },
  getCategories: async () => {
    const data = await AmuseService.getProducts()
    const categories = [...new Set(data.flatMap(prod => prod.category))].sort()
    return categories
  }
}