let todos = [];

const todoInput = document.querySelector("#todo-input");
const todoBtn = document.querySelector("#todo-btn");
const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");

let mrkBtns = document.querySelectorAll(".btn-outline-success");
let dltBtns = document.querySelectorAll(".btn-outline-danger");

const loadTodo = () => {
  todoList.innerHTML = "";

  let i = 0;

  if (todos.length === 0) {
    let task = document.createElement("p");
    task.innerText = "<-- Add Some Todos to Your List -->";

    todoList.appendChild(task);
  }

  todos.map((todo) => {
    todo.id = i;
    i++;

    let row = document.createElement("li");
    row.classList.add("row");
    row.classList.add("justify-content-between");
    row.classList.add("py-3");

    let task = document.createElement("p");
    task.classList.add("fs-4");
    task.classList.add("col-12");
    task.classList.add("col-sm-5");
    task.classList.add("mb-1");
    task.classList.add("d-flex");
    task.classList.add("align-items-center");
    if (todo.complete) {
      task.style.textDecoration = "line-through";
    }
    task.innerText = todo.task;

    let btns = document.createElement("div");
    btns.classList.add("btns");
    btns.classList.add("col-12");
    btns.classList.add("col-sm-7");

    let markBtn = document.createElement("button");
    markBtn.classList.add("btn");
    markBtn.classList.add("m-1");
    if (todo.complete) {
      markBtn.classList.add("btn-outline-info");
      markBtn.innerText = "Mark As Incomplete";
    } else {
      markBtn.classList.add("btn-outline-success");
      markBtn.innerText = "Mark As Complete";
    }
    markBtn.addEventListener("click", () => {
      markTodo(todo.id);
    });

    let dltBtn = document.createElement("button");
    dltBtn.classList.add("btn");
    dltBtn.classList.add("m-1");
    dltBtn.classList.add("btn-outline-danger");
    dltBtn.innerText = "Delete";
    dltBtn.addEventListener("click", () => {
      removeTodo(todo.id);
    });

    btns.appendChild(markBtn);
    btns.appendChild(dltBtn);

    row.appendChild(task);
    row.appendChild(btns);

    if (i % 2 == 0) {
      row.classList.add("bg-body-secondary");
    } else {
      row.classList.add("bg-body-tertiary");
    }

    todoList.appendChild(row);
  });
};

const addTodo = () => {
  let task = todoInput.value;
  todoInput.value = "";
  todos.push({ task: task, complete: false });
  loadTodo();
};

const markTodo = (id) => {
  console.log(id);
  let todo = todos[id];
  todo.complete = !todo.complete;
  loadTodo();
};

const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  loadTodo();
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

loadTodo();
