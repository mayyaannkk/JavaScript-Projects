let form = document.querySelector("#task-form");
let taskList = document.querySelector(".collection");
let filter = document.querySelector("#filter");
let clearBtn = document.querySelector(".clear-tasks");
let taskInput = document.querySelector("#task");

loadEventListener();

function loadEventListener() {
  document.addEventListener("DOMContentLoaded", getTasks);
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTask);
  filter.addEventListener("keyup", filterTask);
}

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    tasks.forEach(function (task) {
      let li = document.createElement("li");
      li.className = "collection-item";
      li.appendChild(document.createTextNode(task));

      let link = document.createElement("a");
      link.className = "delete-item secondary-content";
      link.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(link);

      taskList.appendChild(li);
    });
  }
}

function addTaskToLS() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(taskInput.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(e) {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Enter a task");
  } else {
    addTaskToLS();
    let task = document.createElement("li");
    task.className = "collection-item";
    task.appendChild(document.createTextNode(taskInput.value));

    let link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    task.appendChild(link);

    taskList.appendChild(task);

    taskInput.value = "";
  }
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
    removeFromLS(e.target.parentElement.parentElement.textContent);
  }
}

function removeFromLS(taskItem) {
  let tasks;
  if (JSON.parse(localStorage.getItem("tasks")) === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(function (task, index) {
      if (task === taskItem) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function clearTask() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.clear();
}

function filterTask(e) {
  let task = e.target.value.toLowerCase();
  let tasks = document.querySelectorAll("li");
  tasks.forEach(function (ele) {
    if (ele.toLowerCase().indexOf(task) !== -1) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
}
