export class TodoList {
    constructor() {
        this.loadLocalStorage()
    }

    newTodo(todo) {
        this.todos.push(todo)
        this.saveLocalStorage()
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id)
        this.saveLocalStorage()
    }

    toggleTodo(id) {
        const todo = this.todos;
        const toggleCheck = todo.map(todo => todo.id == id ? todo.completed = !todo.completed : '')
        this.saveLocalStorage()
    }

    deleteCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.toggleTodo)
        this.saveLocalStorage()
    }

    saveLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }

    loadLocalStorage() {
        const todoStorage = localStorage.getItem('todo')

        this.todos  = todoStorage ? JSON.parse(todoStorage) : this.todos = [];
    }
}