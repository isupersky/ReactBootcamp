const areaOfCircle = (radius)=> Math.PI*radius*radius;

const areaOfRectangle = (lengths,breadth)=>lengths*breadth;

const areaOfCylinder = (radius,height)=>Math.PI*radius*radius*height;


const questions8 =document.getElementById("q8btn").addEventListener("click",()=>{
console.log('question 8')
console.log('area of rectangle is ',areaOfRectangle(5,4));
console.log('area of circle is ',areaOfCircle(5));
console.log('area of cylinder is ',areaOfCylinder(5,4));
});


export default {questions8};