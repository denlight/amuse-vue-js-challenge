export class Product {
  constructor(data) {
    this.entity_id = data.entity_id
    this.sku = data.sku
    this.is_cannabis = data.is_cannabis
    this.manufacturer = data.manufacturer
    this.name = data.name
    this.url = `https://amuse.com${data.url}`
    /**
     * seems like these categories have a lower and an upper case version :
     * "cartridge" "flower" "preroll", 
     * just fixing it here
     */ 
    this.category = data.category.charAt(0).toUpperCase() + data.category.substring(1, data.category.length)
    this.sub_category = data.sub_category
    this.image_url = `https://res.cloudinary.com/amusenow/w_200/${data.image_url}`
    this.price = data.price
    this.thc_percentage = data.thc_percentage
    this.quantity = data.quantity
  }
}