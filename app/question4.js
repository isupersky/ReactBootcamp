// Q4. Extract all keys inside address object from user object using destructuring ?
/*
const user = {
firstName: ‘Sahil’,
lastName: ‘Dua’,
Address: {
Line1: ‘address line 1’,
Line2: ‘address line 2’,
State: ‘Delhi’,
Pin: 110085,
Country: ‘India’,
City: ‘New Delhi’,
},
phoneNo: 9999999999
}*/

const question4 = document.getElementById("q4btn").addEventListener("click",()=>{
    const user = {
        firstName: "Sahil",
        lastName: "Dua",
        Address: {
        Line1: "address line 1",
        Line2: "address line 2",
        State: "Delhi",
        Pin: 110085,
        Country: "India",
        City: "New Delhi",
        },
        phoneNo: 9999999999
        }

    let {Address} =  user;  
    console.log(Address);
    


 document.getElementById("a4").innerText = `${Object.entries(Address)}` ;  
        
})

export default {question4}; 
