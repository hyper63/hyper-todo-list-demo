# hyper-todo-list-demo
A demo using hyper to create a persistent todo list

### User Stories
[X] - It allows the user to add a new task <br>
[X] - It allows the user to delete a task <br>
[X] - It allows the user to edit a task <br>
[X] - It allows the user to view all current tasks <br>
[X] - Data persists when the user closes and reopens application

### Enhancements (Stretch Goals)
[X] - Use a design system to improve the styling <br>
[ ] - Add additional features that the user may like or that make the application appealing

### Getting Started
You can run the todo list app by using the following steps:
  
  - In your terminal, type the following:
      - <code>npm start</code>
      - This will start the React Application on port `3000` and the `express` backend on `3010` with hot reloading

### Build

To build the app for production, run `npm run build`. This will build the React application into `/build`. The express backend is configured to serve that static output.

> In a containerized environment, make sure the build output of CRA is copied to `../build` relative to the backends entrypoint (`server/index.js`)
