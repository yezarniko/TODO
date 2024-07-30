document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  let todos = JSON.parse(localStorage.getItem("todos"));
  let startDate = document.querySelector(".start-date");
  if (todos) {
    // Get the reference to the container div
    var todoContainer = document.querySelector(".todo-table");
    let date = null;

    startDate.addEventListener("change", (e) => {
      let TODO = JSON.parse(localStorage.getItem("todos"));
      date = e.target.value;

      let new_todos = [...TODO];

      new_todos = new_todos.filter((todo) => todo.date === date);

      todos = [...new_todos];

      const Header = todoContainer.firstElementChild;
      todoContainer.innerHTML = "";
      todoContainer.append(Header);
      AddToDOItems();
    });

    if (!date) {
      AddToDOItems();
    }

    function AddToDOItems() {
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
        checkbox.checked = todos[i].status === "Complete" ? true : false;
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "Delete";
        deleteButton.id = todos[i].id;
        todoDiv.appendChild(checkboxContainer);
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(deleteButton);

        checkbox.addEventListener("change", (e) => {
          let todos = JSON.parse(localStorage.getItem("todos"));
          let new_todos = [...todos];
          new_todos.map((todo) => {
            console.log(e.target.id);
            if (e.target.id === todo.id) {
              if (todo.status === "Complete") {
                todo.status = "Progreess";
              } else {
                todo.status = "Complete";
              }
            }
          });
          console.log(new_todos);
          localStorage.setItem("todos", JSON.stringify(new_todos));
          window.location.reload();
        });

        deleteButton.addEventListener("click", (e) => {
          let todos = JSON.parse(localStorage.getItem("todos"));
          let new_todos = [...todos];
          new_todos = new_todos.filter((todo) => e.target.id != todo.id);
          console.log(e.target.id);
          console.log(new_todos);
          localStorage.setItem("todos", JSON.stringify(new_todos));
          window.location.reload();
        });

        // Append the todoDiv to the container
        todoContainer.appendChild(todoDiv);
      }
    }
  }
});
