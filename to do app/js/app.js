const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const h1El = document.querySelector('h1')
todoList.addEventListener('click', deleteCheck)
todoButton.addEventListener('click', addBtn)

function addBtn(event) {
    event.preventDefault()
    // create div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    // create li
    const newTodo = document.createElement('li')
    newTodo.innerHTML = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    const completeButton = document.createElement('button')
    completeButton.innerHTML = `<i class="fas fa-check"></i>`
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton)
    const trashButton = document.createElement('button')
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    todoList.appendChild(todoDiv)
    if (todoInput.value == '') {
        h1El.innerHTML = 'Enter the value'
        h1El.classList.add('active')
    }
    if (addBtn) {
        // const trashBtn = document.querySelector('.fa-trash')
        // trashBtn.addEventListener('click', trashList)
        todoInput.value = ''
        h1El.style.color = ''
        h1El.classList.remove('active')
        h1El.innerHTML = `Uzair's ToDo List`
    }
}


function deleteCheck(e) {
    const item = e.target
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    // check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}
