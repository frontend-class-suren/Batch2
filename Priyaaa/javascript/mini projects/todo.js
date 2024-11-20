const inputBox = document.getElementById("input");
const listContainer = document.getElementById("list");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);   
        /*let image = document.createElement("image");
        image.innerHTML = "&#9989"
        li.appendChild(image) ;*/
    }
    inputBox.value = '';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toogle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

// listContainer.addEventListener("click", function(e){
    // if(e.target.tagName === "LI"){
        // e.target.classList.toogle("checked");
    // }
    // else if(e.target.tagName === "IMAGE"){
        // e.target.parentElement.remove();
    // }
// }, false);

function saveData(){ 
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}