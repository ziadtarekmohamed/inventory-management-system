import CategoryModel from "../models/categoryModel.js";

const CategoryController = {
  // Create a new category
  async createCategory(req, res) {
    try {
      const { name, description } = req.body;
      const category = await CategoryModel.create({ name, description });
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get all categories
  async getAllCategories(req, res) {
    try {
      const categories = await CategoryModel.getAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get category by ID
  async getCategoryById(req, res) {
    try {
      const category = await CategoryModel.getById(req.params.id);
      if (!category) return res.status(404).json({ error: "Category not found" });
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update category
  async updateCategory(req, res) {
    try {
      const { name, description } = req.body;
      const updateData = {};
      if (name) updateData.name = name;
      if (description !== undefined) updateData.description = description;

      const category = await CategoryModel.update(req.params.id, updateData);
      res.json({ id: category.id, message: "Category updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete category
  async deleteCategory(req, res) {
    try {
      await CategoryModel.delete(req.params.id);
      res.json({ message: "Category deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default CategoryController;
