const addButton = document.querySelector('#add');
const inputTask = document.querySelector('#task');
const alert = document.querySelector('#alert');
const taskList = document.getElementById("task-list");

function addElement() {
    if(inputTask.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = inputTask.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.className = "btn btn-danger ml-2";

        deleteButton.addEventListener("click", () => {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);  
        inputTask.value = "";
        alert.className = "";
        alert.textContent = "";
    } else {
        alert.textContent = "Please Enter your task at first!";
        alert.className = "alert alert-warning alert-dismissible fade show";
        setTimeout(() => {
            alert.classList.add('fade-out');
        }, 800);

        setTimeout(() => {
            alert.textContent = "";
            alert.className = "";
        }, 800);
    }
}

addButton.addEventListener("click", addElement);
