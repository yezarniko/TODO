document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  let todos = JSON.parse(localStorage.getItem("todos"));
  if (todos) {
    // Get the reference to the container div
    var todoContainer = document.querySelector(".todo-table");

    // Loop through the list of todo items
    for (var i = 0; i < todos.length; i++) {
      // Create a new div with class "todo-table-body"
      var todoDiv = document.createElement("div");
      todoDiv.className = "todo-table-body";

      // Create and append the child divs for each property
      var dateDiv = document.createElement("div");
      dateDiv.textContent = todos[i].date;
      todoDiv.appendChild(dateDiv);

      var descriptionDiv = document.createElement("div");
      descriptionDiv.textContent = todos[i].task;
      todoDiv.appendChild(descriptionDiv);

      var statusDiv = document.createElement("div");
      statusDiv.textContent = todos[i].status;
      todoDiv.appendChild(statusDiv);

      var priorityDiv = document.createElement("div");
      priorityDiv.textContent = todos[i].comment;
      todoDiv.appendChild(priorityDiv);

      // Append the todoDiv to the container
      todoContainer.appendChild(todoDiv);
    }
  }
});
