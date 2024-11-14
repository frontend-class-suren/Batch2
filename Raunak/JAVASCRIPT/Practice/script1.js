let todos = [];
let editIndex = -1;

function displayTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (todo.completed) {
      li.classList.add("completed");
    }
    
    const span = document.createElement("span");
    span.textContent = todo.text;
    
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = () => editTodo(index);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteTodo(index);
    
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "✔️";
    completeBtn.classList.add("complete-btn");
    completeBtn.onclick = () => toggleComplete(index);
    
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById("todo-input");
  const message = document.getElementById("message");
  
  if (input.value.trim() === "") {
    message.textContent = "Please enter a valid task!";
    return;
  }

  if (editIndex >= 0) {
    todos[editIndex].text = input.value.trim();
    message.textContent = "Todo item updated successfully!";
    editIndex = -1;
  } else {
    todos.push({ text: input.value.trim(), completed: false });
    message.textContent = "Todo item created successfully!";
  }
  
  input.value = "";
  displayTodos();
}

function editTodo(index) {
  const input = document.getElementById("todo-input");
  input.value = todos[index].text;
  editIndex = index;
}

function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  displayTodos();
}

displayTodos();
