//Q6. Write a program to implement inheritance upto 3 classes.
// The Class must  public variables and static functions.

class Animal{
    constructor(type){
        this.type=type;
    }
    static aboutAnimalClass(){
        console.log("Basic animal details")
    }
 
}

class Lion extends Animal{
constructor(type,age,location){
    super(type)
    this.age=age
    this.location=location
}
static aboutLionClass(){
    console.log("This class hold info about lion")
}
}

class Cub extends Lion{
    constructor(type,age,location,gender){
        super(type,age,location)
        this.gender=gender
        this.info=()=>{
            console.log(type,age,gender,location)
        }

    }
    static aboutCubClass(){
        console.log("This class holds data about cub")
    }
}


