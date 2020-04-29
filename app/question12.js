//Question 12 - Implementing Set and Map

const question12 = ()=>{

let sett = new Set([1,2,3,4,5,6]);
sett.add(7)
sett.delete(2)
console.log(sett)

let mapp = new Map()
mapp.set("key1","value1")
mapp.set("key2","value2")
mapp.set("key3","value3")

console.log(mapp)
console.log(mapp.get("key1"))

};