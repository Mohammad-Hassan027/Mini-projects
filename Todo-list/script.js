/*
FADFAD
*/

document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".search-bar");
  const searchBtn = document.querySelector(".search-btn");
  const addTodoBtn = document.querySelector(".add-todo");
  const todosContainer = document.querySelector(".todos-container");

  searchBtn.addEventListener("click" , () => {
    const search = searchBar.innerText;
    if(!search) return;
    
  })

  addTodoBtn.addEventListener("click", () => {
    const titleText = prompt("Enter the title:");
    if (!titleText) return;

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const deleAndTaskBox = document.createElement("div");
    deleAndTaskBox.classList.add("dele-taskBox");
    todoItem.appendChild(deleAndTaskBox);

    const addCheckboxBtn = document.createElement("button");
    addCheckboxBtn.classList.add("add-checkbox");
    addCheckboxBtn.innerText = "+ Add task";
    todoItem.appendChild(addCheckboxBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "X";
    deleAndTaskBox.appendChild(deleteBtn);

    const taskBox = document.createElement("div");
    taskBox.classList.add("task-box");
    deleAndTaskBox.appendChild(taskBox);

    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerText = titleText;
    taskBox.appendChild(title);

    const tasks = document.createElement("div");
    tasks.classList.add("tasks");
    taskBox.appendChild(tasks);

    deleteBtn.addEventListener("click", () => {
      todoItem.remove();
    });

    addCheckboxBtn.addEventListener("click", () => {
      const taskText = prompt("Enter a task:");
      if (!taskText) return;

      const task = document.createElement("div");
      task.classList.add("task");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("check-box");

      const taskSpan = document.createElement("span");
      taskSpan.innerText = taskText;

      task.appendChild(checkbox);
      task.appendChild(taskSpan);

      tasks.appendChild(task);
    });

    todosContainer.appendChild(todoItem);
  });
});

/*
const addTodoBtn = document.querySelector(".add-todo");
const todosContainer = document.querySelector(".todos-container");

addTodoBtn.addEventListener("click" , () => {

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todosContainer.appendChild(todoItem);

    const deleAndTaskBox = document.createElement("div");
    deleAndTaskBox.classList.add("dele-taskBox");
    todoItem.appendChild(deleAndTaskBox);
    const addCheckboxBtn = document.createElement("button");
    addCheckboxBtn.classList.add("add-checkbox");
    addCheckboxBtn.innerText = "+ Add task";
    todoItem.appendChild(addCheckboxBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "X";
    deleAndTaskBox.appendChild(deleteBtn);
    const taskBox = document.createElement("div");
    taskBox.classList.add("task-box");
    deleAndTaskBox.appendChild(taskBox);
    
    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerText = prompt("Enter the title :");
    taskBox.appendChild(title);
    const tasks = document.createElement("div");
    tasks.classList.add("tasks");
    taskBox.appendChild(tasks);

    deleteBtn.addEventListener("click" , () => {
        todoItem.remove();
    });

    addCheckboxBtn.addEventListener("click" , () => {

        const task = document.createElement("div");
        task.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("check-box");
        const taskText = document.createElement("span");
        taskText.innerText = prompt("Enter a task :");

        task.appendChild(checkbox);
        task.appendChild(taskText);

        tasks.appendChild(task);

    });

    searchBtn.addEventListener("click" , () => {
        
    });
    
});
*/
