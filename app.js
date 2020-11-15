var input = document.querySelector(".block__form-input");
var btn = document.querySelector(".block__form-btn")
var blockList = document.querySelector(".block__list")

function createElements(text) {
    var newElem = document.createElement("p");
    var deleteSpan = document.createElement("span");

    deleteSpan.className = "block__list-delete";
    deleteSpan.textContent = "del";
    

    newElem.className = "block__list-elem";
    newElem.textContent = text;
    newElem.appendChild(deleteSpan);
    
    deleteSpan.addEventListener("click", function() {
        blockList.removeChild(newElem);
    })

    blockList.appendChild(newElem);
}


btn.addEventListener("click", function(e) {
    e.preventDefault();
    if(!(input.value === "enter " || input.value === "")) {
        createElements(input.value)
        input.value = "enter ";
    }
})

input.addEventListener("focus", function(){
    input.value = "";
})

input.addEventListener("blur",function(){
    if(input.value === "") {
        input.value = "enter ";        
    }
})