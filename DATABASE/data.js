const products = [
    {
        "id": 1,
        "nombre": "Jagermeister",
        "descripcion": "spirituous",
        "precio": 100,
        "imagen": "https://d1osgs5rdqb11o.cloudfront.net/products/main/751/751.thm250.jpg"
    },
    {
        "id": 2,
        "nombre": "Bombay Sapphire",
        "descripcion": "gin",
        "precio": 200,
        "imagen":"https://d1osgs5rdqb11o.cloudfront.net/products/main/244/244.thm350.jpg"
    },
    {
        "id": 3,
        "nombre": "Absolut",
        "descripcion": "vodka",
        "precio": 300,
        "imagen":"https://d1osgs5rdqb11o.cloudfront.net/products/main/623/623.thm350.jpg"
    },
    {
        "id": 4,
        "nombre": "Monkey 47",
        "descripcion": "gin",
        "precio": 400,
        "imagen":"https://d1osgs5rdqb11o.cloudfront.net/products/main/7714/7714.thm350.jpg"
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