const todolist = []

 function addtodo(){
    
   const inpElement = document.querySelector(`.js-input`) 
   const name =  inpElement.value;
   console.log(name)
   todolist.push(name)
   console.log(todolist)
   inpElement.value = ""
}