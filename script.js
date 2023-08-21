const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

function addTask() {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "X";
    li.appendChild(span);
}

taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);