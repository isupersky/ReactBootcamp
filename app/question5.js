//Find the possible combinations of a string and store them in a MAP? 

const question5 =document.getElementById("q5btn").addEventListener("click",()=>{
    let str1= document.getElementById("stringVal").value;
    var array1 = [];
    var count=0;
    let finalMap = new Map();
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        finalMap.set(`key_${count++}`,temp);
        combi.push(temp);
    }
}
console.log("Answer for question 5--------------->")
console.log(finalMap)
document.getElementById("a5").innerText = "output in console";
});

export default {question5};





