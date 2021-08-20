// type
// types are unique. 
// this allows us to add to the type system
type Year = string | number

enum Color { 
    "Red",      //0
    "Blue",     //1
    "Yellow",   //2
}

console.log(Color.Red)

type Car = {
    year: Year
    color: Color
}

type addInput = number | string
function addTwoThings(x: any, y: any): string | number {
    return x + y
}

let z = addTwoThings(2, 5)

// Guard.. Type Guards
if (typeof z == "string"){
    z.toUpperCase()
}

// Array<number> or number[] : these are equivalent 
let myObj: Array<any> | object
myObj = [1, 2, 3]
if (myObj instanceof Array) {
    console.log(myObj)
} else {
    let keys = Object.entries(myObj)
    console.log(keys)
}


// interface