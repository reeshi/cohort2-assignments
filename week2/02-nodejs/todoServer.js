/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const express = require('express');
  const bodyParser = require('body-parser');
  const uuid = require('uuid');
  const fs = require("fs");
  
  const app = express();
  const port = 8000;
  
  app.use(bodyParser.json());

  // const todos = [];
  const todosFilePath = "./todos.json";

  // Retrieve all todo items
  app.get("/todos", (req, res) => {
    fs.readFile(todosFilePath, 'utf8', (err, data) => {
      if(err){
        res.status(500).json({ errro: "Failed to read file"});
      }
      const todos = JSON.parse(data);
      res.status(200).json(todos);
    })
  });

  // Retrieve a specific todo item by ID.
  app.get("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    fs.readFile(todosFilePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ errro: "Failed to read file" });
      }
      const todos = JSON.parse(data);
      // find the todo
      const todo = todos.find((todo) => todo.id === todoId);
      if (!todo) {
        res.status(404).json("Not Found");
      }
      res.status(200).json(todo);
    })
  });

  // create a new todo item
  app.post("/todos", (req, res) => {
    const todo = req.body;
    // generating unique id for todo.
    const todoId = uuid.v4();
    // assigning the id to the todo object.
    Object.assign(todo, { id: todoId });
    // storing the todo.
    // todos.push(todo);
    fs.readFile(todosFilePath, 'utf8', (err, data) => {
      if(err){
        res.status(500).json({ error: 'Failed to read file' });
      }
      // converting the data into json.
      const jsonArray = JSON.parse(data);

      // pushing the new todo into array.
      jsonArray.push(todo);

      // converting back the data into json string.
      const updatedJsonString = JSON.stringify(jsonArray, null, 2);

      // writing in the file.
      fs.writeFile(todosFilePath, updatedJsonString, 'utf8', (err) => {
        if (err) {
          res.status(500).json({ error: 'Failed to write file' });
        }
        res.status(201).json({ id: todoId });
      });
    });
  });

  // Update an existing todo item by Id
  app.put("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    const updateTodo = req.body;
    fs.readFile(todosFilePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ errro: "Failed to read file" });
      }
      const todos = JSON.parse(data);
      // find the todo
      const todo = todos.find((todo) => todo.id === todoId);
      if (!todo) {
        res.status(404).json("Not Found");
      }
      // updating the todo
      for (const key in updateTodo) {
        if (key in todo) {
          todo[key] = updateTodo[key];
        }
      }
      // converting back the data into json string.
      const updatedJsonString = JSON.stringify(todos, null, 2);

      // writing in the file.
      fs.writeFile(todosFilePath, updatedJsonString, 'utf8', (err) => {
        if (err) {
          res.status(500).json({ error: 'Failed to write file' });
        }
        res.status(200).json("Updated Todo");
      });
    })
  });

  app.delete("/todos/:id", (req, res) => {
    const todoId = req.params.id;
    fs.readFile(todosFilePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).json({ errro: "Failed to read file" });
      }
      const todos = JSON.parse(data);
      // find the todo
      const idx = todos.findIndex((todo) => todo.id === todoId);
      if (idx < 0) {
        res.status(404).json("Not Found");
      }

      // delete todo from array using splice method of an array.
      todos.splice(idx, 1);

      // converting back the data into json string.
      const updatedJsonString = JSON.stringify(todos, null, 2);

      // writing in the file.
      fs.writeFile(todosFilePath, updatedJsonString, 'utf8', (err) => {
        if (err) {
          res.status(500).json({ error: 'Failed to write file' });
        }
        res.status(200).json("Todo Deleted");
      });
    })
  });

  // if no routes match then this middleware handle.
  app.use((req, res) => {
    res.status(404).send('Route not found');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
  module.exports = app;