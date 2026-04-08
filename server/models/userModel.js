import { ref, push, set, get, child, update, remove, query, orderByChild, equalTo } from "firebase/database";
import { db } from "../firebase/config.js";

const UserModel = {
  // Create a new user
  async create(userData) {
    const newRef = push(ref(db, "users"));
    const data = {
      name: userData.name,
      email: userData.email,
      passwordHash: userData.passwordHash,
      role: userData.role || "user",
      createdAt: Date.now(),
    };
    await set(newRef, data);
    return { id: newRef.key, ...data };
  },

  // Get all users
  async getAll() {
    const snapshot = await get(ref(db, "users"));
    const list = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        list.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
    }
    return list;
  },

  // Get user by ID
  async getById(id) {
    const snapshot = await get(child(ref(db, "users"), id));
    if (!snapshot.exists()) return null;
    return { id: snapshot.key, ...snapshot.val() };
  },

  // Get user by email
  async getByEmail(email) {
    const q = query(ref(db, "users"), orderByChild("email"), equalTo(email));
    const snapshot = await get(q);
    if (!snapshot.exists()) return null;
    let user = null;
    snapshot.forEach((childSnapshot) => {
      user = { id: childSnapshot.key, ...childSnapshot.val() };
    });
    return user;
  },

  // Update user
  async update(id, userData) {
    await update(ref(db, `users/${id}`), userData);
    return { id, ...userData };
  },

  // Delete user
  async delete(id) {
    await remove(ref(db, `users/${id}`));
    return { id };
  },
};

export default UserModel;
