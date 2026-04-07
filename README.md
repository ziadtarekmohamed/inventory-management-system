Inventory Management System (Firebase + Node.js)

 Overview

This project is a web-based Inventory Management System that allows users to manage products efficiently using a structured workflow.

The system demonstrates a complete application flow:
**UI → Data → Binding → Logic → Running the App**

It is built using **HTML, CSS (Frontend)** and **Node.js (Backend)**, with **Firebase Firestore** as the database.

---

 Features

*  Add new products
*  View all products in a dynamic table
*  Update product information
*  Delete products
*  Search products
*  Filter by category
*  Highlight low stock items
*  Real-time data updates using Firebase
*  Input validation

---

Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js (Express.js)
* **Database:** Firebase Firestore

---

## How It Works

1. User enters product data in the UI
2. Frontend sends request to Node.js API
3. Backend processes request and communicates with Firebase
4. Firebase stores/retrieves data
5. UI updates dynamically based on response

---

##  CRUD Operations

| Operation | Description                    |
| --------- | ------------------------------ |
| Create    | Add new product                |
| Read      | Fetch and display all products |
| Update    | Edit product details           |
| Delete    | Remove product                 |

---

##  Validation Rules

* Product name is required
* Price must be greater than 0
* Quantity must be greater than or equal to 0

---

##  Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/inventory-management-system-firebase.git
cd inventory-management-system-firebase
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Setup Firebase

* Go to Firebase Console
* Create a project
* Enable Firestore Database
* Copy your Firebase config

Create a file:

```
server/firebase/config.js
```

Add your config:

```js
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = db;
```

---

### 4. Run the server

```bash
node server.js
```

---

### 5. Open the frontend

Open:

```
client/index.html
```

---

##  API Endpoints

| Method | Endpoint   | Description      |
| ------ | ---------- | ---------------- |
| POST   | /products  | Add product      |
| GET    | /products  | Get all products |
| PUT    | /products/ | Update product   |
| DELETE | /products/ | Delete product   |

---

##  Learning Objectives

This project demonstrates:

* Data structuring using objects
* Data binding between UI and backend
* CRUD operations
* Real-time database integration
* Clean architecture and modular design

---

##  Screenshots

(Add screenshots here after building UI)

---

##  Future Improvements

* User authentication
* Dashboard analytics
* Export reports
* Responsive design

---

##  Author

* Your Name Here

---

## 📄 License

This project is licensed under the MIT License.
