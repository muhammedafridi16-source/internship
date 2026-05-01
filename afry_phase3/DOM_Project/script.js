// Dynamic List
document.getElementById("addBtn").onclick = function() {
    let item = document.getElementById("item").value;
    if (item !== "") {
        let li = document.createElement("li");
        li.innerText = item;
        document.getElementById("list").appendChild(li);
        document.getElementById("item").value = "";
    }
}

// To-Do List with delete option
document.getElementById("todoBtn").onclick = function() {
    let task = document.getElementById("todo").value;
    if (task !== "") {
        let li = document.createElement("li");
        li.innerText = task + " ";
        
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.onclick = function() {
            li.remove();
        };
        
        li.appendChild(delBtn);
        document.getElementById("todoList").appendChild(li);
        document.getElementById("todo").value = "";
    }
}

// Toggle Button
document.getElementById("toggleBtn").onclick = function() {
    let txt = document.getElementById("toggleText");
    if (txt.style.display === "none") {
        txt.style.display = "block";
    } else {
        txt.style.display = "none";
    }
}