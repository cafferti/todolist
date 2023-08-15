let eggcount = 0
const result = []
function removeallegg(array){
    array.reverse()
    for(i = 0; i < array.length; i++){
        if(array[i] === `egg` && eggcount < 2){
            eggcount++
            continue
        }else{
           result.push(array[i])
        }
    }
  console.log(result)
}

function removeegg(array){
    let newarray = []
    for (let i = 0; i < array.length; i++) {
        if (newarray.includes(array[i])) {
            continue
        }else{
            newarray.push(array[i])
        }
    }
    console.log(newarray)

}
removeallegg([`egg`, `fish`, `egg`, `bannana`, `egg`, `fish`, `cassava`]);

removeegg([`egg`, `fish`, `egg`, `bannana`, `egg`, `fish`, `cassava`])


function removeduplicate(arguments){
    let newarray = []
    for (let i = 0; i < arguments.length; i++) {
        if (newarray.includes(arguments[i])) {
            continue
        }else{
            newarray.push(arguments[i])
        }
    }
    console.log(newarray)
}
removeduplicate([`egg`, `fish`, `egg`, `bannana`, `egg`, `fish`, `cassava`])



const Duplicate  = [  "apple","banana","cherry","date","","apple", "cherry", "honeydew"];
console.log(Duplicate)

const finduplicate = (array) =>{
let unique = []

  for(i = 0; i < array.length; i++){
     if(unique.includes(array[i])){
        continue
     }else{
        unique.push(array[i])
     }
    }
    console.log(unique)
}

finduplicate(Duplicate)


function showindex(arguments){
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] === `apple`){
            console.log([i])
            break
        }
    }
}

showindex(Duplicate)

const fruits = ["apple", "banana", "orange", "grape"];

if (fruits.includes("apple")) {
    console.log("Apple is in the array.");
} else {
    console.log("Apple is not in the array.");
}


