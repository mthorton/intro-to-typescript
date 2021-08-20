"use strict";
// count is of "type" number
let count = 5;
count = 10;
// Const's type is a literal 
const fname = "Max";
// this makes a var of type nay
// let testing;
let testing;
testing = 5;
let student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12
};
//                param    expecting return value
function toString(student) {
    return JSON.stringify(student);
}
const toStringArrow = (student) => {
    return JSON.stringify(student);
};
console.log(toString(student));
function add(x, y) {
    let result = x + y;
    return result;
}
// Tuple
// An array of a known size. 
function sendMessage() {
    return ["success", {
            fname: "Justin",
            lname: "Ahmann",
            grade: 12
        }];
}
const [statusRes, data] = sendMessage();
if (statusRes == "success")
    console.log(data);
