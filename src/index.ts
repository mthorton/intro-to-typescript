
// count is of "type" number
let count = 5
count = 10

// Const's type is a literal 
const fname = "Max"

// this makes a var of type nay
// let testing;
let testing: number;

testing = 5
// testing = "Max"

type Student = {
    fname: string
    lname: string
    grade: number
}

let student: Student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12
}

//                param    expecting return value
function toString(student: Student): string {
    return JSON.stringify(student)
}

const toStringArrow = (student: Student): string => {
    return JSON.stringify(student)
}


console.log(toString(student))



function add(x: number, y: number): number {
    let result = x + y 
    return result
}

// Union
type Status = "success" | "failure"
type ServerResponse = Student | Error

// Tuple
// An array of a known size. 
function sendMessage(): [status: Status, response: ServerResponse]{
    return ["success", {
        fname: "Justin",
        lname: "Ahmann",
        grade: 12
    }]
}

const [statusRes, data] = sendMessage()
if (statusRes == "success")
    console.log(data)
