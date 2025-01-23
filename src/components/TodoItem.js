import { Component } from "../common/Component.js";

export class TodoItem extends Component {
  render(description) {

    const todoElement = document.createElement('li')
    todoElement.className = "todo-item"
    todoElement.innerHTML = description

    const completeTodoBtn = document.createElement('button')
    completeTodoBtn.className = "complete-btn"
    completeTodoBtn.innerText = "Mark Complete"

    const deleteTodoBtn = document.createElement('button')
    deleteTodoBtn.className = "delete-btn"
    deleteTodoBtn.innerText = "Delete"

    const btnArea = document.createElement('div')
    btnArea.className = btn-area
    btnArea.append(completeTodoBtn)
    btnArea.append(deleteTodoBtn)

    todoElement.append(btnArea)

    return todoElement;
  }
}