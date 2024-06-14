# todo_list_api

This API provides endpoints to manage tasks, including creating, retrieving, updating, and deleting tasks. Tasks are stored in memory (an array) and can be accessed via HTTP methods.

## Table of Contents

- [Endpoints](#endpoints)
  - [Get All Tasks](#get-all-tasks)
  - [Get Task by ID](#get-task-by-id)
  - [Create Task](#create-task)
  - [Update Task by ID](#update-task-by-id)
  - [Delete Task by ID](#delete-task-by-id)
- [Usage](#usage)
- [Running the API](#running-the-api)
- [Contributing](#contributing)

## Endpoints

### Get All Tasks

- **GET** `/tasks/getall`

Retrieves a paginated list of tasks.

Query Parameters:

 * - page (optional): Page number (default: 1).
 * - limit (optional): Number of tasks per page (default: 5).
 * - sortBy (optional): Field to sort by (title or id, default: id).
 * - sortOrder (optional): Sort order (asc or desc, default: asc).
 * - filterTitle (optional): Filter tasks by title containing this string.
 * - filterDescription (optional): Filter tasks by description containing this string.
 * 
 * Example:
 
 * GET /tasks/getall?page=1&limit=5&sortBy=title&sortOrder=desc&filterTitle=task
 */

### Get Task by ID

- **GET** `/tasks/:id`

Retrieves a specific task by its ID.

Parameters:
- `id`: Task ID (numeric).

Example:
```
GET /tasks/1
```

### Create Task

- **POST** `/tasks/create`

Creates a new task.

Request Body:
```json
{
  "title": "Task title",
  "description": "Task description"
}
```

Example:
```
POST /tasks/create
{
  "title": "Task 1",
  "description": "Description for Task 1"
}
```

### Update Task by ID

- **PUT** `/tasks/:id`

Updates an existing task by its ID.

Request Body:
```json
{
  "title": "Updated task title",
  "description": "Updated task description"
}
```

Example:
```
PUT /tasks/1
{
  "title": "Updated Task 1",
  "description": "Updated description for Task 1"
}
```

### Delete Task by ID

- **DELETE** `/tasks/:id`

Deletes a task by its ID.

Example:
```
DELETE /tasks/1
```

## Usage

- Ensure you have Node.js and npm installed.
- Clone this repository and install dependencies using `npm install`.
- Start the server using `npm run server`.
- Use tools like Postman or curl to interact with the API endpoints.

## Running the API

1. Clone the repository:

   ```
   git clone https://github.com/8309h/todo_list_api.git
   ```

2. Navigate into the project directory:

   ```
   cd todo-list-api
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the server:

   ```
   npm run server
   ```

5. The server will start running at `http://localhost:8088` by default.
