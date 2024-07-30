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

      var checkboxContainer = document.createElement("div");
      var checkbox = document.createElement("input");
      checkbox.id = todos[i].id;
      var deleteButton = document.createElement("span");
      checkbox.type = "checkbox";
      checkbox.name = "myCheckbox";
      checkbox.value = true;
      deleteButton.className = "deleteButton";
      deleteButton.textContent = "Delete";
      todoDiv.appendChild(checkboxContainer);
      checkboxContainer.appendChild(checkbox);
      checkboxContainer.appendChild(deleteButton);

      checkbox.addEventListener("change", (e) => {
        let todos = JSON.parse(localStorage.getItem("todos"));
        let new_todos = [...todos];
        new_todos.map((todo) => {
          console.log(e.target.id);
        });
      });

      // Append the todoDiv to the container
      todoContainer.appendChild(todoDiv);
    }
  }
});
