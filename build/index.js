"use strict";
// count is of "type" number
var count = 5;
count = 10;
// Const's type is a literal 
var fname = "Max";
// this makes a var of type nay
// let testing;
var testing;
testing = 5;
var student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12
};
//                param    expecting return value
function toString(student) {
    return JSON.stringify(student);
}
var toStringArrow = function (student) {
    return JSON.stringify(student);
};
console.log(toString(student));
function add(x, y) {
    var result = x + y;
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
var _a = sendMessage(), statusRes = _a[0], data = _a[1];
if (statusRes == "success")
    console.log(data);
