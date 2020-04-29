//Ques 10 Write a program to flatten a nested array to single level using arrow functions.

const question10 = document.getElementById("q10btn").addEventListener("click",()=>{

    console.log('ques 10');
const arr = [1,[2,3],[4,[5,6]]];
const flattenedArray = arr.flat(Infinity);
console.log(flattenedArray);
});

export default {question10};