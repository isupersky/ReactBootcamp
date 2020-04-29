// Create a markup template using string literal
/*
const song = {
 name: 'Dying to live',
 artist: 'Tupac',
 featuring: 'Biggie Smalls'
};  

Result:
"<div class="song">
   <p>
     Dying to live — Tupac
     (Featuring Biggie Smalls)
   </p>
 </div>
“*/

const question3 = document.getElementById("q3btn").addEventListener("click",()=>{
    const song = {
        name: 'Dying to live',
        artist: 'Tupac',
        featuring: 'Biggie Smalls'
       };

       let response = `<div class="song">
       <p>
        ${song.name}
         (Featuring ${song.featuring})
       </p>
        </div>`

    document.getElementById("a3").innerHTML = response;
    
    });


export default {question3};