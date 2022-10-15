const p = document.createElement("p")
p.textContent = "accessing html elements"
p.innerHTML = "i am a paragraph with <strong>bold text</strong>"

const toDoList = document.querySelector("ul")
const newToDo = document.createElement("li")

newToDo.textContent = "Do home work"

//When we want to add a new element in html
toDoList.appendChild(newToDo)

//inserting a new element
anotherToDo = document.createElement("li")
anotherToDo.textContent = "pay bills"
toDoList.insertBefore(anotherToDo, toDoList.firstElementChild)

//creating a new element by replacing it 
const modifyToDo = document.createElement("li")
modifyToDo.textContent = "feed the dogs";
toDoList.replaceChild(modifyToDo, toDoList.children[2])

//removing an element
toDoList.removeChild(toDoList.lastElementChild)
