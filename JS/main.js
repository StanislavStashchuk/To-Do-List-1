//_________
// Selectors
//_________
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//______________
// Event Listeners
//______________
todoButton.addEventListener('click', addTodo);


//_________
// Functions
//_________
function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create <li></li>
    const newTodo = document.createElement('li');
    newTodo.innerText = 'heeeey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Creating buttons
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>' ;
    completedButton.classList.add("comlete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash"></i>' ;
    trashButton.classList.add("comlete-btn");
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);
}