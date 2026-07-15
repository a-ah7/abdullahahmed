let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {

    if (taskInput.value === "") {
        return;
    }

    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);
    checkbox.addEventListener("change", function () {

    if (checkbox.checked) {
        taskText.style.textDecoration = "line-through";
    } 
    else {
        taskText.style.textDecoration = "none";
    }

});

   let taskText = document.createElement("span");
   taskText.textContent = taskInput.value;
   listItem.appendChild(taskText);


    taskList.appendChild(listItem);

    taskInput.value = "";
    let button= document.createElement("button");
    button.textContent = "X";
    listItem.appendChild(button);
    
    button.addEventListener("click", function () {
    listItem.remove();
    
 
});
});



