# TODO-App
A full-stack Todo List application built with React and Spring Boot featuring CRUD operations, task management, dark mode, and real-time UI updates.
🚀 Features

✅ Add tasks with title and description

✏ Edit tasks inline

✔ Mark tasks as completed

🗑 Delete tasks

🕒 Timestamp for each task

🌙 Dark mode toggle

📂 Active & Completed sections

📱 Responsive layout

🔄 Real-time UI updates

🏗 Tech Stack

Frontend

React

Axios

CSS Flexbox

Backend

Spring Boot

Spring Data JPA

REST API

MySQL / H2 compatible

📂 Project Structure
project
 ├── backend
 │   ├── controller
 │   ├── entity
 │   ├── repository
 │   └── application.properties
 │
 └── frontend
     ├── src
     ├── public
     └── package.json
⚙️ Installation & Setup
1️⃣ Backend Setup
cd backend
mvn spring-boot:run

Runs on → http://localhost:8080

2️⃣ Frontend Setup
cd frontend
npm install
npm start

Runs on → http://localhost:3000

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/todos	Get all tasks
POST	/api/todos	Create task
PUT	/api/todos/{id}	Update task
DELETE	/api/todos/{id}	Delete task
📊 Data Model
Todo
 ├── id : Long
 ├── title : String
 ├── description : String
 ├── completed : Boolean
 └── createdAt : LocalDateTime
🧠 Architecture Overview
React UI → Axios → REST API → Spring Boot → Database

State is synchronized between UI and database using HTTP requests.
