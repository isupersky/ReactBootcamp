//Q4(B) finding unique number from array using SET

const question4b = document.getElementById("q4bbtn").addEventListener("click",()=>{

let array = [3,62,3,9,92,234,23,3,234,7,23,74,23,76,92];

let set = new Set(array)
console.log(`Array taken : ${array}`);
console.log(set);


document.getElementById("a4b").innerText = "output in Console";});

export default {question4b};
