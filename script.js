document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
  
    // Function to add a new task
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Task cannot be empty!");
        return;
      }
  
      // Create a new task item
      const listItem = document.createElement("li");
  
      const taskTextNode = document.createElement("span");
      taskTextNode.textContent = taskText;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
      });
  
      listItem.appendChild(taskTextNode);
      listItem.appendChild(deleteButton);
  
      taskList.appendChild(listItem);
  
      // Clear the input field
      taskInput.value = "";
    };
  
    // Add task when the button is clicked
    addTaskButton.addEventListener("click", addTask);
  
    // Add task when the Enter key is pressed
    taskInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });
  