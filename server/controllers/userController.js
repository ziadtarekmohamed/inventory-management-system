import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const UserController = {
  // Create a new user
  async createUser(req, res) {
    try {
      const { name, email, password, role } = req.body;

      // Check if user already exists
      const existingUser = await UserModel.getByEmail(email);
      if (existingUser) {
        return res.status(400).json({ error: "User with this email already exists" });
      }

      // Hash password
      const passwordHash = await bcrypt.hash(password, 10);

      const user = await UserModel.create({ name, email, passwordHash, role });
      res.status(201).json({ id: user.id, name, email, role: role || "user" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await UserModel.getAll();
      // Remove passwordHash from response
      const safeUsers = users.map(({ passwordHash, ...user }) => user);
      res.json(safeUsers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get user by ID
  async getUserById(req, res) {
    try {
      const user = await UserModel.getById(req.params.id);
      if (!user) return res.status(404).json({ error: "User not found" });
      const { passwordHash, ...safeUser } = user;
      res.json(safeUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update user
  async updateUser(req, res) {
    try {
      const { name, email, password, role } = req.body;
      const updateData = {};
      if (name) updateData.name = name;
      if (email) updateData.email = email;
      if (role) updateData.role = role;
      if (password) updateData.passwordHash = await bcrypt.hash(password, 10);

      const user = await UserModel.update(req.params.id, updateData);
      res.json({ id: user.id, message: "User updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete user
  async deleteUser(req, res) {
    try {
      await UserModel.delete(req.params.id);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default UserController;
