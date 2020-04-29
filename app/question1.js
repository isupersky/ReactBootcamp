// Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, 
// Using arrow function, create an array of the numbers greater than `70`.


const question1 = document.getElementById("q1btn").addEventListener("click",()=>{

    let array = [3,62,234,7,23,74,23,76,92];
    let betterArray = array.filter((num)=> num>70);


document.getElementById("a1").innerHTML = `${betterArray}`;

})


export default {question1};