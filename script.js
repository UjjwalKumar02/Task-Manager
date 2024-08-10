let inputBox = document.getElementById("input-box");
let taskSec = document.getElementById("task-sec");

function addTask() {
  if (inputBox.value == '') {
    alert("Empty Task")
  }
  else {
    let task = document.createElement("div");
    task.innerHTML = `<i class="fa-regular fa-circle" style="color: #f7f7f5;"></i><span>${inputBox.value}</span><i class="fa-solid fa-trash" style="color: #f7f7f5;"></i>`;

    task.classList.add("task");
    taskSec.appendChild(task);
  }
  inputBox.value = '';
  saveData();
}


taskSec.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
    saveData();
  }
  else if (e.target.tagName === "SPAN") {
    e.target.classList.toggle("checked");

    e.target.previousElementSibling.classList.toggle("fa-solid");
    e.target.previousElementSibling.classList.toggle("fa-circle-check");
    e.target.previousElementSibling.classList.toggle("fa-circle");
    e.target.previousElementSibling.classList.toggle("fa-regular");
    saveData();
  }
  else if (e.target.classList.contains("fa-circle") || e.target.classList.contains("fa-circle-check")) {
    e.target.nextElementSibling.classList.toggle("checked");

    e.target.classList.toggle("fa-solid");
    e.target.classList.toggle("fa-circle-check");
    e.target.classList.toggle("fa-circle");
    e.target.classList.toggle("fa-regular");

    saveData();
  }
});


function saveData() {
  localStorage.setItem("data", taskSec.innerHTML);
}
function showTask() {
  taskSec.innerHTML = localStorage.getItem("data");
}
showTask();