const inputTask = document.querySelector(".new-task")
const addTask = document.querySelector(".add-task")
const tasks  = document.querySelector(".tasks")

function createLi(){
    const li = document.createElement("li");
    return li;
}
inputTask.addEventListener('keypress' , (e) => {
    if (e.keyCode === 13){
        if (!inputTask.value) return;
        createTask(inputTask.value) 
    }    

})

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createCleanButton(li){
    li.innerText += " ";
    const cleanButton = document.createElement('button');
    cleanButton.innerText = 'Apagar';
    cleanButton.setAttribute('class', 'clean')
    cleanButton.setAttribute('title', 'apagar essa tarefa')
    li.appendChild(cleanButton);
}

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    clearInput();
    createCleanButton(li)
    saveTask();
}

addTask.addEventListener('click',() => {
    if (!inputTask.value) return;
    createTask(inputTask.value)    
})

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('clean')){
        el.parentElement.remove();
        saveTask();
        
    }
})

function saveTask() {
    const liTasks = tasks.querySelectorAll('li')
    const taskList = [];
    
    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '').trim();
        taskList.push(taskText);        
    }
    
    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks')
    const taskList = JSON.parse(tasks)

    for (let task of taskList) {
        createTask(task)
    }
}

addSavedTasks();