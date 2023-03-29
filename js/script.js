

function addNewTask() {
    let li = document.createElement("li");
    let newTask = document.getElementById("newTask").value;
    let txt = document.createTextNode(newTask);
    let span = document.createElement("span");
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    if (newTask === "") {
        document.getElementById("msg1").style.display = "block";
        const timeOut = setTimeout(hideMsg, 3000);
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
        
        counter();
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
        counter();
    }
});

//DELETE
let evTarget = "";
addEventListener("click", (ev) => {
    if (ev.target.className === "delTask") {
        document.getElementById("overlay").hidden = false;
        evTarget = ev.target;
    }    
});

function isConfirm(answer) {
    if (answer) {        
        evTarget.parentNode.remove(evTarget);
    }
    closeConfirmBox();
    counter();
}

function closeConfirmBox() {
    document.getElementById("overlay").hidden = true;
}

//EDIT
addEventListener("click", (ev) => {
    if (ev.target.className === "editTask") {
        let span = ev.target.parentNode.childNodes[0];
        let txt = ev.target.parentNode.childNodes[0].innerText;
        span.innerHTML = '<input id="txtTask" onfocus="this.selectionStart = this.selectionEnd = 500;" onblur="spanReset(this)" type="text" value="' + txt + '"/>';
        document.getElementById("txtTask").focus();
    }
});

function spanReset(e) {
    let span = e.parentNode;
    let txt = e.value;
    if (txt === "") {
        document.getElementById("txtTask").focus();
        document.getElementById("msg1").style.display = "block";
        const timeOut = setTimeout(hideMsg, 3000);
    } else {
        span.innerHTML = txt;
    }
}

function hideMsg() {

    if (document.getElementById("msg1")) {
        document.getElementById("msg1").style.display = "none";
    }
    if (document.getElementById("msg2")) {
        document.getElementById("msg2").style.display = "none";
    }
}

function counter() {
    let check = document.querySelectorAll("li.checked");
    let tasks = document.getElementsByTagName("li");
    let prog = document.getElementById("progress");

    prog.innerHTML = check.length + "/" + tasks.length;
}


window.onbeforeunload = function () {
    sessionStorage.setItem("todoItens", document.getElementById("tasks").innerHTML);    
}

window.onload = function () {
    document.getElementById("tasks").innerHTML =  sessionStorage.getItem("todoItens");
}



