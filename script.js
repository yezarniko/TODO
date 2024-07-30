let task = "";
let form_date = document.querySelector(".form_date");
let form_task = document.querySelector(".form_task");
let form_comment = document.querySelector(".form_comment");

const form_button = document.querySelector(".button");

form_button.addEventListener("click", setTodo);

function setTodo(e) {
  //   console.log(form_date.value);
  //   console.log(form_task.value);
  //   console.log(form_comment.value);
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", "");

    let new_todos = [
      {
        id: new Date().toISOString(),
        date: form_date.value,
        task: form_task.value,
        status: "Progreess",
        comment: form_comment.value,
      },
    ];

    localStorage.setItem("todos", JSON.stringify(new_todos));
    window.location.assign("/");
  } else {
    let todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);

    let new_todos = [
      {
        id: new Date().toISOString(),
        date: form_date.value,
        task: form_task.value,
        status: "Progreess",
        comment: form_comment.value,
      },
      ...todos,
    ];

    localStorage.setItem("todos", JSON.stringify(new_todos));
    window.location.assign("/");
  }
}
