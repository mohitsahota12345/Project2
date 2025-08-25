function countLetters() {
    const input = document.getElementById("inputText");
    const result = document.getElementById("result");
    result.innerHTML = "Letter count: " + input.value.length;
}
 
function increase() {
    count++;
    document.getElementById("charCount").innerHTML = count;
}
 
function decrease() {
   count--;
    document.getElementById("charCount").innerHTML = count;
}

//SWAP NAME//
 function countLetters() {
    const input = document.getElementById("inputText");
    const result = document.getElementById("result");
    result.innerHTML = "Letter count: " + input.value.length;
}
 
let count = 0;
 
function increase() {
    count++;
    document.getElementById("charCount").innerHTML = count;
}
 
function decrease() {
   count--;
    document.getElementById("charCount").innerHTML = count;
}
 
function swapText() {
    const input1 = document.getElementById("newInput");
    const input2 = document.getElementById("newInput2");
    let a = "";
    a = input1.value;
 
   input1.value = input2.value;
   input2.value = a;
}

// TO_DO LIST

function addTask() {
  let task = document.getElementById("todoInput").value;
  if (task) {
    let list = document.getElementById("todoList");
    list.innerHTML += "<li>" + task + "</li>";
    document.getElementById("todoInput").value = "";
  }
}