const todolist = [{name :`wash diner`,
                  duedate: `20-4-2022`},

                 { name:`make dishes`,
                   duedate: `20-6-2023`}]
                  //the above is an array of objects

displaytodolist();

function displaytodolist(){
    
let todolistHtml = ``

for(let i = 0; i < todolist.length; i++){
        const todoobject = todolist[i];
        const task = todoobject.name;
        const duedate = todoobject.duedate;
        const html = 
              
         `<div>${task}</div>
          <div>${duedate}</div>
          <button onclick = " todolist.splice(${i}, 1); displaytodolist(); " >Delete</button>
        `;
        
        todolistHtml += html;
}
document.querySelector(`.js-todo`).innerHTML = todolistHtml


}



 function addtodo(){
    
   const inpElement = document.querySelector(`.js-input`) 
   const name =  inpElement.value;
   const dateinp =  document.querySelector(`.js-duedate`);
   const duedate = dateinp.value;
   todolist.push({name: name,
                 duedate: duedate
             })
   console.log(todolist)
   inpElement.value =  ""
   displaytodolist();
}