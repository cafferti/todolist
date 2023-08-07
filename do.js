const todolist = [`wash diner`, `make dishes`]

displaytodolist()

function displaytodolist(){
    
let todolistHtml = ``

for(let i = 0; i < todolist.length; i++){
    const todo = todolist[i];
    const html = `<p>${todo}</p>`;
    todolistHtml += html;
}
document.querySelector(`.js-todo`).innerHTML = todolistHtml


}



 function addtodo(){
    
   const inpElement = document.querySelector(`.js-input`) 
   const name =  inpElement.value;
   console.log(name)
   todolist.push(name)
   console.log(todolist)
   inpElement.value =  ""
   displaytodolist();
}