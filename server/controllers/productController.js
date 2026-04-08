import ProductModel from "../models/productModel.js";

const ProductController = {
  // Create a new product
  async createProduct(req, res) {
    try {
      const { name, price, quantity, categoryId } = req.body;
      const product = await ProductModel.create({ name, price, quantity, categoryId });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get all products
  async getAllProducts(req, res) {
    try {
      const products = await ProductModel.getAll();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get product by ID
  async getProductById(req, res) {
    try {
      const product = await ProductModel.getById(req.params.id);
      if (!product) return res.status(404).json({ error: "Product not found" });
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get products by category
  async getProductsByCategory(req, res) {
    try {
      const products = await ProductModel.getByCategoryId(req.params.categoryId);
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update product
  async updateProduct(req, res) {
    try {
      const { name, price, quantity, categoryId } = req.body;
      const updateData = {};
      if (name) updateData.name = name;
      if (price !== undefined) updateData.price = price;
      if (quantity !== undefined) updateData.quantity = quantity;
      if (categoryId) updateData.categoryId = categoryId;

      const product = await ProductModel.update(req.params.id, updateData);
      res.json({ id: product.id, message: "Product updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete product
  async deleteProduct(req, res) {
    try {
      await ProductModel.delete(req.params.id);
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default ProductController;
