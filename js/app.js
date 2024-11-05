// document.querySelector(".button").addEventListener("click", () => {
//   const taskInput = document.querySelector(".input");
//   const taskText = taskInput.value.trim();
//   if (taskText) {
//     const newTaskDiv = document.createElement("div");
//     newTaskDiv.classList.add("third-rectangle");
//     const taskContent = document.createElement("span");
//     taskContent.textContent = taskText;
//     newTaskDiv.appendChild(taskContent);
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.classList.add("delete-btn");
//     deleteButton.addEventListener("click", () => {
//       newTaskDiv.remove();
//     });
//     newTaskDiv.appendChild(deleteButton);
//     document.querySelector(".second-rectangle").appendChild(newTaskDiv);
//     taskInput.value = "";
//   }
// });

const taskInput = document.querySelector(".input");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("third-rectangle");

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    newTaskDiv.appendChild(taskContent);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
      newTaskDiv.remove();
    });

    newTaskDiv.appendChild(deleteButton);
    document.querySelector(".second-rectangle").appendChild(newTaskDiv);

    taskInput.value = ""; 
  }
}

// Add event listener for button click
document.querySelector(".button").addEventListener("click", addTask);

// Add event listener for Enter key press
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
