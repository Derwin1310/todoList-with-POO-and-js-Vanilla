import { Todo } from "/src/classes/";
import { todoList } from '/src/index.js'
//Referencias HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo')
const deleteCompletes = document.querySelector('.clear-completed')
const ulFilters = document.querySelector('.filters')
const anchorFilters = document.querySelectorAll('.filtro')

export const createTodoHtml = (todo) => {
	const htmlTodo = `
    <li class="${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''}>
            <label>${todo.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

	const div = document.createElement('div');
	div.innerHTML = htmlTodo;

	divTodoList.append(div.firstElementChild)

	return div.firstElementChild;
};

//Eventos
txtInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && txtInput.value.length > 0) {
        const addNewTodo = new Todo(txtInput.value);
        todoList.newTodo(addNewTodo);

        createTodoHtml(addNewTodo);

        txtInput.value = '';
    } 
})


divTodoList.addEventListener('click', (e) => {
    const { localName } = e.target;
    const todoElement = e.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');

    if(localName.includes('input')) {
        todoList.toggleTodo(todoId)
        todoElement.classList.toggle('completed')
    }

    if(localName.includes('button')) {
        todoList.deleteTodo(todoId)
        divTodoList.removeChild(todoElement)
    }
})

deleteCompletes.addEventListener('click', () => {
    todoList.deleteCompletedTodos()
    
    for(let i = divTodoList.children.length - 1; i>= 0; i--) {

        const element = divTodoList.children[i]

        if(element.classList.contains('completed')) divTodoList.removeChild(element)
    }
})

ulFilters.addEventListener('click', (e) => {
    const filter = e.target.text
    anchorFilters.forEach(elem => elem.classList.remove('selected'))
    e.target.classList.add('selected')
    
    for(const element of divTodoList.children) {
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed')

        switch(filter) {
            case 'Pendientes':
                if(completed) {
                    element.classList.add('hidden')
                }
            break;

            case 'Completados':
                if(!completed) {
                    element.classList.add('hidden')
                }
            break;
        }
    } 
})