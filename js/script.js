function addNewTask() {
    let li = document.createElement("li");
    let newTask = document.getElementById("newTask").value;
    let txt = document.createTextNode(newTask);
    let span = document.createElement("span");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    if (newTask === "") {
        alert("Favor preencher algo.");
    } else {
        span.appendChild(txt);
        span.setAttribute("id", "convt");
        li.appendChild(span);
        btn1.className = "editTask";
        btn1.appendChild(document.createTextNode("✎"));
        li.appendChild(btn1);
        btn2.className = "delTask";
        btn2.appendChild(document.createTextNode("🗙"));
        li.appendChild(btn2);
        document.getElementById("tasks").appendChild(li);
        document.getElementById("newTask").value = "";
        document.getElementById("newTask").focus();
    }
}

//Check
addEventListener("click", (ev) => {
    if (ev.target.nodeName === "SPAN") {
        if (ev.target.className === "") {
            ev.target.className = "checked";
            ev.target.parentNode.className = "checked";
        } else {
            ev.target.className = "";
            ev.target.parentNode.className = "";
        }
    }
});

//DELETE
addEventListener("click", (ev) => {
    if (ev.target.className === "delTask") {
        const evTarget = ev.target;
        evTarget.parentNode.remove(evTarget);
    }
});

//EDIT
addEventListener("click", (ev) => {
    if (ev.target.className === "editTask") {
        let span = document.getElementById("convt");
        let txt = ev.target.parentNode.childNodes[0].innerText;
        span.innerHTML = '<input id="txtTask" onblur="spanReset(this)" type="text" value="' + txt + '"/>';
        document.getElementById("txtTask").focus();        
    }
});

function spanReset(e) {
    let span = document.getElementById("convt");
    let txt = document.getElementById("txtTask").value;
    if (txt === "") {
        document.getElementById("txtTask").focus();
        alert("O campo não pode ficar em branco");
    } else {
        span.innerHTML = txt;
    }
}