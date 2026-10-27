# ProShop eCommerce Platform

> Full-featured eCommerce application built using the MERN stack (MongoDB, Express, React, Node.js) and Redux.

Developed and maintained by **[Arham Bhatti](https://github.com/Arham38)**.

![screenshot](./uploads/Screen%20Shot%202020-09-29%20at%205.50.52%20PM.png)

---

## 🚀 Features

- **Shopping Cart**: Full-featured shopping cart with quantity selection and persistent storage.
- **Product Reviews & Ratings**: Customers can submit star ratings and detailed reviews.
- **Top Products Carousel**: Highlights top-rated products on the homepage.
- **Search & Pagination**: Dynamic product search by keyword with paginated results.
- **User Authentication**: Secure JWT authentication and password hashing with Bcrypt.
- **User Profile**: Update profile details, change passwords, and view past order history.
- **Admin Dashboard**:
  - Manage and edit product catalog (create, update, delete).
  - Manage user accounts and administrative privileges.
  - View all customer orders and mark orders as delivered.
- **Checkout Workflow**: Multi-step checkout (shipping address, payment method, order review).
- **Payment Integration**: PayPal and credit card integration.
- **Database Seeder**: Preloaded with sample products and users for quick local testing.

---

## 🛠️ Tech Stack

- **Frontend**: React (Hooks), Redux (Thunk), React Router, React Bootstrap
- **Backend**: Node.js, Express.js (ES Modules)
- **Database**: MongoDB, Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT), Bcrypt.js
- **File Uploads**: Multer
- **Deployment**: Render / Vercel + MongoDB Atlas

---

## 📋 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### 1. Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
NODE_ENV = development
PORT = 5000
MONGO_URI = your_mongodb_connection_string
JWT_SECRET = your_jwt_secret_key
PAYPAL_CLIENT_ID = your_paypal_client_id
```

*(You can also refer to `.env.example` for reference).*

### 2. Install Dependencies

Install root (backend) and frontend dependencies:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
npm install --prefix frontend
```

### 3. Seed Database (Optional)

You can seed sample users and products into your database:

```bash
# Import sample data
npm run data:import

# Destroy data
npm run data:destroy
```

**Default Test Logins:**
- **Admin:** `admin@example.com` / `123456`
- **Customer:** `john@example.com` / `123456`
- **Customer:** `jane@example.com` / `123456`

### 4. Run the Application

Run both backend (:5000) and frontend (:3000) concurrently:

```bash
npm run dev
```

- Frontend runs at: `http://localhost:3000`
- Backend API runs at: `http://localhost:5000`

---

## 🌐 Free Deployment

Step-by-step instructions for deploying free on **Render** with **MongoDB Atlas** are available in [DEPLOYMENT.md](DEPLOYMENT.md).

```bash
# Build frontend for production
npm run build

# Start production server
npm start
```

---

## 👤 Author

**Arham Bhatti**
- GitHub: [@Arham38](https://github.com/Arham38)
- Repository: [proshop_Mern](https://github.com/Arham38/proshop_Mern)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

Copyright (c) 2026 Arham Bhatti.
