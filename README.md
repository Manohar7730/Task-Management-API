# Task Management App - Full Stack Application

A full-stack task management application with React frontend and Node.js backend with column-based organization.

**Live Demo:** [https://task-management-app-1-09j9.onrender.com/](https://task-management-app-1-09j9.onrender.com/)

## 🚀 Features
- Column-based task organization (Pending, In Progress, Completed)
- Complete CRUD operations for tasks
- Drag-and-drop functionality between status columns
- Detailed task descriptions and status tracking

## 🛠️ Tech Stack
- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Deployment:** Render
- **Architecture:** REST API with React SPA

## 📋 Installation
### Backend Setup:
```bash
git clone https://github.com/Manohar7730/Task-Management-API.git
cd Task-Management-API
npm install
npm start

```

# -----------------------------------------
# API Testing with Postman
# -----------------------------------------

# CREATE TASK
POST http://localhost:5000/create \
  '{"title":"Finish backend","description":"Complete Task API","status":"pending"}'

# GET ALL TASKS
GET http://localhost:5000/ \

# UPDATE TASK STATUS (replace :id with actual task ID)
PUT http://localhost:5000/update-status/:id \
 '{"status":"completed"}'

# UPDATE TASK (replace :id with actual task ID)
PUT http://localhost:5000/update/:id \
  '{"title":"Finish backend","description":"Complete Task API","status":"pending"}'

# DELETE TASK (replace :id with actual task ID)
DELETE http://localhost:5000/delete/:id \

# -----------------------------------------
# Nodemon for Auto-Restart in Dev
# -----------------------------------------

# Install nodemon globally if not installed
npm install -g nodemon

# Start server with nodemon
nodemon index.js

# -----------------------------------------
# Author: Manohar
# GitHub: https://github.com/Manohar7730
# -----------------------------------------
