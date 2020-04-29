

const question9 = document.getElementById("q9btn").addEventListener("click", ()=>{

    const array_to_be_filtered=(prompt("Eneter the numbers comma separated like 1,2,3 in which you want to remove dublications"));
    var array_converted = array_to_be_filtered.split(',');
    var result_array=RemoveDuplicate(array_converted);
    document.getElementById("a9").innerHTML="The resultened array is: <br/>"+result_array;
});

function RemoveDuplicate(arrayWithDublication)
{
    var finalArray = []; 
    var counter = 0; 
    var flag = false; 
    for (var i = 0; i < arrayWithDublication.length; i++) 
    { 
        for (var j = 0; j < finalArray.length; j++) 
        { 
            if ( arrayWithDublication[i] == finalArray[j] ) 
            { 
                flag = true; 
            } 
        } 
        counter++; 
        if (counter == 1 && flag == false) 
        { 
            finalArray.push(arrayWithDublication[i]); 
        } 
        flag = false; 
        counter = 0; 
    } 
    return finalArray;

}


export default {question9};