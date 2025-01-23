export class TodoContext {
  constructor() {
    this.todos = []
    this.listeners = []
  }

  addTodo(todo) {
    this.todos.push({
      id: Math.random() *(9000 - 1000) + 1000,
      description: todo,
      completed: false
    })
    this.notifyListeners()
  }

  completeTodo(id) {
    this.notifyListeners()

  }

  deleteTodo(id) {
    this.notifyListeners()
  }

  subscribe(listener) {
    this.listeners.push(listener) // add function to the listeners array
    console.log(this.listeners)
  }

  notifyListeners() {
    // Iterate and trigger the functions stored inside the listeners array
    this.listeners.forEach(listener => listener(this.todos))
  }
}
