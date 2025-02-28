
## Version 2: MongoDB & Express-Based Password Manager

### Overview
This version of **PassOP** uses a **MongoDB database** and an **Express.js backend** to store and manage passwords securely. The front end remains the same, built with **React, Vite, and TailwindCSS**.

### Features
- Store passwords securely in MongoDB
- REST API powered by Express.js
- CRUD operations (Create, Read, Update, Delete)
- Responsive and fast UI with Vite

### Installation & Setup
#### Backend Setup
```bash
# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Set up environment variables (create a .env file)
MONGO_URI=your_mongodb_connection_string
PORT=5000

# Start the backend server
npm start
```

#### Frontend Setup
```bash

# Install dependencies
npm install

# Start the development server
npm run dev
```

### API Routes
| Method | Endpoint       | Description            |
|--------|---------------|------------------------|
| GET    | `/passwords`  | Fetch all passwords   |
| POST   | `/passwords`  | Add a new password    |
| DELETE | `/passwords/:id` | Delete a password   |

### Usage
- Add passwords through the UI (saved in MongoDB)
- Retrieve stored passwords via API
- Edit, delete, and copy passwords

---

### Tech Stack
- **Frontend**: React.js, Vite, TailwindCSS
- **Backend** (MongoDB version only): Express.js, MongoDB
- **Storage**: LocalStorage (Version 1) / MongoDB (Version 2)

