<img width="1919" height="1014" alt="Screenshot 2026-02-17 191555" src="https://github.com/user-attachments/assets/ce268aaf-012d-4589-98b6-082bd890ba4b" />
<img width="1919" height="1016" alt="Screenshot 2026-02-17 191617" src="https://github.com/user-attachments/assets/4a7604c1-7f98-4a15-a730-56bc486538fd" />

# 📝 Todo List — Full Stack Application

A modern full-stack **Todo List Manager** built using **React (Frontend)** and **Spring Boot (Backend)** that allows users to manage tasks efficiently with real-time updates, editing, completion tracking, and a clean responsive UI.

---

## 🚀 Live Features

* ➕ Add tasks with title and description
* ✏ Inline edit tasks
* ✔ Mark tasks complete / incomplete
* 🗑 Delete tasks
* 🕒 Auto timestamp for each task
* 🌙 Dark mode toggle
* 📂 Active & Completed sections
* ⚡ Instant UI refresh after actions
* 📱 Responsive layout

---

## 🏗 Tech Stack

**Frontend**

* React
* Axios
* CSS Flexbox Layout

**Backend**

* Spring Boot
* Spring Data JPA
* REST APIs
* H2 / MySQL compatible

---

## 📂 Folder Structure

```
project
 ├── backend
 │   ├── controller
 │   ├── entity
 │   ├── repository
 │   └── TodoApplication.java
 │
 └── frontend
     ├── src
     ├── public
     └── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Run Backend

```bash
cd backend
mvn spring-boot:run
```

Runs on → `http://localhost:8080`

---

### 2️⃣ Run Frontend

```bash
cd frontend
npm install
npm start
```

Runs on → `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Endpoint          | Description   |
| ------ | ----------------- | ------------- |
| GET    | `/api/todos`      | Get all tasks |
| POST   | `/api/todos`      | Create task   |
| PUT    | `/api/todos/{id}` | Update task   |
| DELETE | `/api/todos/{id}` | Delete task   |

---

## 🧾 Data Model

```
Todo
 ├── id : Long
 ├── title : String
 ├── description : String
 ├── completed : Boolean
 └── createdAt : LocalDateTime
```

---

## 🧠 Architecture

```
React UI → Axios → REST API → Spring Boot → Database
```

The frontend communicates with backend APIs and updates the UI dynamically without page reload.

---

## 🎯 Key Highlights

* Clean UI layout with aligned task rows
* Modular component design
* Full CRUD functionality
* Mobile-friendly structure
* Dark/light theme support
* Structured backend architecture

---

## 🔮 Future Enhancements

* User authentication (JWT)
* Drag & drop tasks
* Priority tags
* Due dates
* Notifications
* Search & filter

---

## 💡 Interview Explanation

> This project demonstrates a full-stack CRUD system where React handles dynamic UI rendering while Spring Boot exposes RESTful APIs for persistent data storage and real-time synchronization.

---

