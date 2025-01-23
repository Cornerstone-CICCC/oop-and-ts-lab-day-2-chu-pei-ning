import { Component } from "../common/Component.js";
import { TodoItem } from "./TodoItem.js";

export class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {todos: []}
    this.updateList = this.updateList.bind(this)
    this.props.todoContext.subscribe(this.updateList)
    this.todoListElement = null
  }

  updateList(todos) {
    this.state.todos = todos    
    this.todoListElement.innerHTML = ""

    const todoItems = this.state.todos.map(item => {
      return (new TodoItem()).render(item.description).outerHTML
    }
      
    ).join('')
    
    this.todoListElement.innerHTML = todoItems
  }

  render() {
    const todoListElement = document.createElement('div')
    todoListElement.className = "todo-list"

    this.todoListElement = todoListElement
    
    return todoListElement;
  }
}