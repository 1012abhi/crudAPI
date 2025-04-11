# Task Management API

A RESTful API built with Node.js and Express.js for managing tasks. This API provides endpoints for creating, reading, updating, and deleting tasks (CRUD operations).

## 📋 Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)

## ✨ Features
- Create new tasks
- Retrieve all tasks
- Update existing tasks
- Delete tasks
- Error handling
- Input validation

## 🔧 Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

## 🚀 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies:
```bash
npm install
```

## 🔐 Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
PORT=3000
```

## 🏃‍♂️ Running the Application

Start the server:
```bash
npm start
```

The API will be available at `http://localhost:3000/api`

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

#### 1. Create a Task
- **Method:** POST
- **Endpoint:** `/tasks`
- **Content-Type:** application/json

**Request Body:**
```json
{
    "title": "Task Title",
    "description": "Task Description",
    "completed": false
}
```

**Successful Response (201 Created):**
```json
{
    "id": 1,
    "title": "Task Title",
    "description": "Task Description",
    "completed": false
}
```

#### 2. Get All Tasks
- **Method:** GET
- **Endpoint:** `/tasks`

**Successful Response (200 OK):**
```json
[
    {
        "id": 1,
        "title": "Task Title",
        "description": "Task Description",
        "completed": false
    }
]
```

#### 3. Update a Task
- **Method:** PUT
- **Endpoint:** `/tasks/:id`
- **Content-Type:** application/json

**Request Body:**
```json
{
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "completed": true
}
```

**Successful Response (200 OK):**
```json
{
    "id": 1,
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "completed": true
}
```

#### 4. Delete a Task
- **Method:** DELETE
- **Endpoint:** `/tasks/:id`

**Successful Response:** 204 No Content

## ⚠️ Error Handling

The API uses the following error status codes:

- **400 Bad Request:** Invalid input or missing required fields
- **404 Not Found:** Resource not found
- **500 Internal Server Error:** Server-side errors

Error Response Format:
```json
{
    "error": "Error message description"
}
```

## 🛠️ Dependencies
- express: ^5.1.0 - Web framework for Node.js
- dotenv: ^16.4.7 - Environment variable management

## 📝 Notes
- Task IDs are auto-generated and unique
- The `completed` field defaults to `false` if not provided
- All timestamps are in ISO 8601 format
- The API uses JSON for request and response bodies

## 📄 License
ISC
