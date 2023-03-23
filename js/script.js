function addNewTask() {
    let li = document.createElement("li");
    let newTask = document.getElementById("newTask").value;
    let txt = document.createTextNode(newTask);    
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    if (newTask === "") {
        alert("Favor preencher algo.");
    }else{
        li.appendChild(txt);
        span1.className = "editTask";
        span1.appendChild(document.createTextNode("✏️"));        
        li.appendChild(span1);
        span2.className = "delTask";
        span2.appendChild(document.createTextNode("🗑️"));        
        li.appendChild(span2);                
        document.getElementById("tasks").appendChild(li);
        document.getElementById("newTask").value = "";
    }  
}

addEventListener("click", (ev) => {    
    if (ev.target.tagName === "SPAN") { 
        const evTarget = ev.target;
        evTarget.parentNode.remove(evTarget);
    }    
});


addEventListener("click", (ev) => {    
    if (ev.target.tagName === "LI") { 
        const evTarget = ev.target;        
    }    
});




//remover tag li
//li.parentNode.removeChild(li);

