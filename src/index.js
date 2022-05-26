import '/src/styles.css'
import { Todo, TodoList } from '/src/classes/'
import { createTodoHtml } from '/src/js/components'

export const todoList = new TodoList()

todoList.todos.forEach(createTodoHtml);