
document.body.style.backgroundColor = 'rgb(247 216 216)'

///
let todoHeader = document.getElementById('todo-header')

todoHeader.style.backgroundColor = "#ffff8e"
///

let inputToDo = document.getElementById('input-to-do')

inputToDo.style.margin = ' 30px auto'
inputToDo.style.width = '200px'
inputToDo.style.display = 'flex'
inputToDo.style.alignItems = "center"
inputToDo.style.flexDirection = 'column'
///
let container = document.getElementById('container')

container.style.backgroundColor = 'lightgrey'
container.style.display = 'flex'
container.style.justifyContent = 'space-around'
container.style.border = "2px solid black"

////
let input = document.getElementById('input')

input.style.width = '250px'
input.style.marginBottom = '20px'
input.style.padding = '5px'
input.style.backgroundColor = "#d3d3d342"
input.style.borderRadius = "10px"
input.style.borderColor = 'lightgrey'
input.style.color = 'black'
input.placeholder = 'Type Your Task'
///

const add = document.createElement('button')
inputToDo.appendChild(add)

add.style.textAlign = 'center'
add.style.width = '120px'
add.style.padding = "4px"
add.style.backgroundColor = "red"
add.style.borderRadius = "10px"
add.style.borderColor = 'lightgrey'
add.style.color = 'white'
add.innerHTML = "Add Task"
///
let toDo = document.getElementById('to-do')
let done = document.getElementById('done')

const toDoList = document.createElement('ul')
toDo.appendChild(toDoList)


const addTask = (event) => {
  const toDoListItem = document.createElement('li')
  toDoList.appendChild(toDoListItem)

  toDoListItem.innerText = input.value
  toDoListItem.onclick = markAsDone
  event.preventDefault()
}

const clearInput = () => {
  input.value = ' '

}
let form = document.getElementById('form')
form.onsubmit = addTask
input.onfocus = clearInput

const doneList = document.createElement('ul')
done.appendChild(doneList)

const markAsDone = (event) => {
  const toDoListItem = document.createElement('li')
  doneList.appendChild(toDoListItem)
  toDoListItem.innerText = event.target.innerHTML
  event.target.remove()

}


