var input = document.querySelector("#userinput");
var button = document.querySelector("#enter");
var todoList = document.querySelector("#todo-list");
var todoListElements = Array.from(document.querySelectorAll("#todo-list > li"))

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    todoList.appendChild(li);
    li.addEventListener('click', toggleDone);
    input.value = "";
}

function addListAfterKeypress(event) {
    if (event.keyCode === 13 && inputLength() > 0) {
        createListElement();
    }
    // console.log(event.keyCode);
}

function addListAfterClick() {
    if (inputLength() > 0) {
       createListElement();
    }
   // console.log(event.keyCode);
}

function addToggleDone(elem) {

}


function toggleDone(element) {
    elem.toggle("done");
}

todoListElements.forEach(function(elem) {
    elem.addEventListener("click", toggleDone);
});

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

todoList.length

console.log(todoList);
console.log(todoListElements);