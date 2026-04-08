// Validate user creation input
export function validateUser(req, res, next) {
  const { name, email, password } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "Name is required and must be a non-empty string" });
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "A valid email is required" });
  }
  if (!password || typeof password !== "string" || password.length < 6) {
    return res.status(400).json({ error: "Password is required and must be at least 6 characters" });
  }

  next();
}

// Validate category creation input
export function validateCategory(req, res, next) {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "Category name is required" });
  }

  next();
}

// Validate product creation input
export function validateProduct(req, res, next) {
  const { name, price, quantity, categoryId } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ error: "Product name is required" });
  }
  if (price === undefined || typeof price !== "number" || price < 0) {
    return res.status(400).json({ error: "Price is required and must be a non-negative number" });
  }
  if (quantity === undefined || typeof quantity !== "number" || quantity < 0) {
    return res.status(400).json({ error: "Quantity is required and must be a non-negative number" });
  }
  if (!categoryId || typeof categoryId !== "string") {
    return res.status(400).json({ error: "Category ID is required" });
  }

  next();
}
