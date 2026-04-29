# Internship-Hub-project
# 🚀 Internship Hub

A full-stack web application to manage internships with features like adding, viewing, and deleting internships using **MongoDB, Express, Node.js, and Vanilla JavaScript**.

---

## 📌 Features

* 📄 View all internships
* ➕ Add new internships
* ❌ Delete internships
* 🔍 Search internships by role
* 🌐 Full-stack integration (Frontend + Backend + Database)

---

## 🛠️ Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript (Vanilla)

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB Atlas
* Mongoose

---

## 📂 Project Structure

```
InternshipHub_Project/
│
├── Backend/
│   ├── models/
│   │   └── Internship.js
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/internship-hub.git
cd internship-hub
```

---

### 2️⃣ Install backend dependencies

```
cd Backend
npm install
```

---

### 3️⃣ Add MongoDB connection

In `server.js`, replace your connection string:

```js
mongoose.connect("your-mongodb-uri")
```

---

### 4️⃣ Run the backend server

```
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 5️⃣ Run the frontend

Open `frontend/index.html` in your browser.

---

## 🔗 API Endpoints

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| GET    | /api/internships     | Get all internships |
| POST   | /api/internships     | Add new internship  |
| DELETE | /api/internships/:id | Delete internship   |

---

## 📸 Screenshots

*Add your project screenshots here*

---

## ✨ Future Improvements

* ✏️ Edit / Update internships
* 🔐 Authentication (Login/Register)
* ❤️ Save / Bookmark internships
* 🎨 UI improvements with React or Tailwind
* 📱 Responsive design

---

## 🙌 Author

**Amrutha Varshini Kona**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it!

---

