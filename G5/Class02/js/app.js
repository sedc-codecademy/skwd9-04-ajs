
// 1. Create constructor function
// 2. Instantiate 3 todos by using the constructor function
// 3. Add them into todos array
// 4. Display the array items into the html
// 5. Priority levels 0, 1, 2
// 6. Select all the elements that you need to work with from the HTML!

let todoList = document.getElementById('todo-list');
let addBtn = document.getElementById('addBtn');
let selectPriority = document.getElementById('priority');

let priorityColors = ['red', 'orange', 'yellow'];


function Todo(content, isFinished, priority) {
    this.content = content;
    this.isFinished = isFinished;
    this.priority = priority;
}

let todo1 = new Todo('Buy some bread!', false, priorityColors[0]);
let todo2 = new Todo('Get your dog for a walk!', true, priorityColors[1]);
let todo3 = new Todo('Call John!', true, priorityColors[2]);

let todos = [todo1, todo2, todo3];

// Save the todos in the local storage
// let todoString = JSON.stringify(todos);
// localStorage.setItem('todos_list', todoString);

console.log(todos);


function markTodo(checkBox) {
    if (checkBox.checked) {
        // Cross the text
        checkBox.previousElementSibling.style.textDecoration = 'line-through';
    } else {
        // Uncross the text
        checkBox.previousElementSibling.style.textDecoration = 'none';
    }
}

function displayItems(todosArray) {
    todoList.innerHTML = "";
    let i = 1;
    for (let todo of todosArray) {
        if (!todo.isFinished) {
            todoList.innerHTML += `
            <div class="todo" style="background-color: ${todo.priority}">
                <p class="todo-text">${todo.content}</p>
                <input type="checkbox" id="checkbox_${i}" class="checkbox" onchange="markTodo(this)">
            </div>
            `;
        } else {
            todoList.innerHTML += `
            <div class="todo" style="background-color: ${todo.priority}">
                <p class="todo-text" style="text-decoration:line-through;">${todo.content}</p>
                <input type="checkbox" id="checkbox_${i}" class="checkbox" checked onchange="markTodo(this)">
            </div>
            `;
        }
        i++;
    }
}
displayItems(todos);

addBtn.addEventListener('click', function() {
    // 1. Get value of the input field and the value of the priority level drop down
    // 2. Create new instance of Todo constructor function 
    // 3. Add the new todo into an array of todos => push()
    // 4. Display all the todos into the html => done

    let inputValue = document.getElementById('todo-input').value;
    let priorityLevel = selectPriority.value;
    let newTodo = new Todo(inputValue, false, priorityColors[priorityLevel]);

    todos.push(newTodo);
    displayItems(todos);

});

