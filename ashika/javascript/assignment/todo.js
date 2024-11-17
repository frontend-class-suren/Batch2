function addTask(){
  const newTask =  document.createElement('li')
  const taskList = document.getElementById('taskList')
  taskList.appendChild(newTask)
  newTask.textContent = document.getElementById('inputTask').value
  document.getElementById('inputTask').value = ""
  deleteTask(newTask)
  editTask(newTask)
  

}
function deleteTask(newTask){
  const deleteBtn = document.createElement('button')
  // document.getElementById('deleteTask').style.color="white"
  deleteBtn.textContent = "Delete"
  newTask.appendChild(deleteBtn)
  deleteBtn.onclick = function(){
    newTask.remove()
  }
}
// function editTask(newTask){
//   const deleteBtn = document.createElement('button')
//   // document.getElementById('deleteTask').style.color="white"
//   editBtn.textContent = "Edit"
//   newTask.appendChild(editBtn)
//   ediyBtn.onclick = function(){
//     newTask.edit()}}