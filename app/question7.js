//Write a program to implement a class having static functions

class Calculator{
    static add(x,y){
        console.log( x+y)
    }
    static subtract(x,y){
        console.log(  x-y)
    }
    static multiply(x,y){
        console.log(  x*y)
    }
    static divide(x,y){
        console.log(  x/y)
    }
}


console.log("Below is Output of question 7--------------->")
Calculator.add(2,5);
Calculator.subtract(2,5);
Calculator.multiply(2,5);
Calculator.divide(2,5);

