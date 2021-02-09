
// 1. Create constructor function
// 2. Instantiate 3 todos by using the constructor function
// 3. Add them into todos array
// 4. Display the array items into the html
// 5. Priority levels 0, 1, 2
// 6. Select all the elements that you need to work with from the HTML!

let todoList = document.getElementById('todo-list');


function Todo(content, isFinished, priority) {
    this.content = content;
    this.isFinished = isFinished;
    this.priority = priority;
}

let todo1 = new Todo('Buy some bread!', false, 2);
let todo2 = new Todo('Get your dog for a walk!', true, 1);
let todo3 = new Todo('Call John!', true, 0);

let todos = [todo1, todo2, todo3];
console.log(todos);

function markTodo() {
    alert("Hi");
}

function displayItems(todosArray) {
    todoList.innerHTML = "";
    let i = 1;
    for (let todo of todosArray) {
        if (!todo.isFinished) {
            todoList.innerHTML += `
            <div class="todo">
                <p class="todo-text">${todo.content}</p>
                <input type="checkbox" id="checkbox_${i}" class="checkbox" onchange="markTodo()">
            </div>
            `;
        } else {
            todoList.innerHTML += `
            <div class="todo">
                <p class="todo-text" style="text-decoration:line-through;">${todo.content}</p>
                <input type="checkbox" id="checkbox_${i}" class="checkbox" checked onchange="markTodo()">
            </div>
            `;
        }
        i++;
    }
}
displayItems(todos);

