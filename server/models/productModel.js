import { ref, push, set, get, child, update, remove, query, orderByChild, equalTo } from "firebase/database";
import { db } from "../firebase/config.js";

const ProductModel = {
  // Create a new product
  async create(productData) {
    const newRef = push(ref(db, "products"));
    const now = Date.now();
    const data = {
      name: productData.name,
      price: productData.price,
      quantity: productData.quantity,
      categoryId: productData.categoryId,
      createdAt: now,
      updatedAt: now,
    };
    await set(newRef, data);
    return { id: newRef.key, ...data };
  },

  // Get all products
  async getAll() {
    const snapshot = await get(ref(db, "products"));
    const list = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        list.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
    }
    return list;
  },

  // Get product by ID
  async getById(id) {
    const snapshot = await get(child(ref(db, "products"), id));
    if (!snapshot.exists()) return null;
    return { id: snapshot.key, ...snapshot.val() };
  },

  // Get products by category
  async getByCategoryId(categoryId) {
    const q = query(ref(db, "products"), orderByChild("categoryId"), equalTo(categoryId));
    const snapshot = await get(q);
    const list = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        list.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
    }
    return list;
  },

  // Update product
  async update(id, productData) {
    const updateData = { ...productData, updatedAt: Date.now() };
    await update(ref(db, `products/${id}`), updateData);
    return { id, ...updateData };
  },

  // Delete product
  async delete(id) {
    await remove(ref(db, `products/${id}`));
    return { id };
  },
};

export default ProductModel;
