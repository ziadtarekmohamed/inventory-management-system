import { ref, push, set, get, child, update, remove } from "firebase/database";
import { db } from "../firebase/config.js";

const CategoryModel = {
  // Create a new category
  async create(categoryData) {
    const newRef = push(ref(db, "categories"));
    const data = {
      name: categoryData.name,
      description: categoryData.description || "",
    };
    await set(newRef, data);
    return { id: newRef.key, ...data };
  },

  // Get all categories
  async getAll() {
    const snapshot = await get(ref(db, "categories"));
    const list = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        list.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
    }
    return list;
  },

  // Get category by ID
  async getById(id) {
    const snapshot = await get(child(ref(db, "categories"), id));
    if (!snapshot.exists()) return null;
    return { id: snapshot.key, ...snapshot.val() };
  },

  // Update category
  async update(categoryId, categoryData) {
    await update(ref(db, `categories/${categoryId}`), categoryData);
    return { id: categoryId, ...categoryData };
  },

  // Delete category
  async delete(id) {
    await remove(ref(db, `categories/${id}`));
    return { id };
  },
};

export default CategoryModel;
