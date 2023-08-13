let eggcount = 0
const result = []
function removeallegg(array){
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