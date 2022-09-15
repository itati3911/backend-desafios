const products = [
    {
        "id": 1,
        "name": "Jagermeister",
        "price": 100
    },
    {
        "id": 2,
        "name": "Bombay Sapphire",
        "price": 200
    },
    {
        "id": 3,
        "name": "Absolut",
        "price": 300
    },
    {
        "id": 4,
        "name": "Monkey 47",
        "price": 400
    }
];
  
  module.exports.products = products;
  class Products {
    constructor() {
      this.products = products;
    }
  
    async getAll() {
      return this.products;
    }
  
    async getById(number) {
      return this.products.find((product) => product.id === number);
    }
  
    async getFindIndex(id) {
      return this.products.findIndex((product) => product.id === Number(id));
    }
  
    async deleteProduct(id) {
      return this.products.filter((product) => product != id);
    }
  }
  
  module.exports = Products;