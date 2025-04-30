# Task Management API - Setup & Usage Guide

----

# STEP 1: Clone the repository
git clone https://github.com/Manohar7730/Task-Management-API.git
cd Task-Management-API

# STEP 2: Install dependencies
npm install

# STEP 3: Create environment variables file
.env

# Add the following lines in the .env file
'MONGO_URI=mongodb://127.0.0.1:27017/task-manager' >> .env

# STEP 4: Run MongoDB server locally (if not already running)
# Ensure MongoDB is installed and in PATH

# STEP 5: Start the API server
node index.js

# Server will run at: http://localhost:5000
# You should see:
# 🚀 Server running at http://localhost:5000
# MongoDB is connected!

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
