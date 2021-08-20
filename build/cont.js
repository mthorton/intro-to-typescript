"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
console.log(Color.Red);
function addTwoThings(x, y) {
    return x + y;
}
let z = addTwoThings(2, 5);
// Guard.. Type Guards
if (typeof z == "string") {
    z.toUpperCase();
}
// Array<number> or number[] : these are equivalent 
let myObj;
myObj = [1, 2, 3];
if (myObj instanceof Array) {
    console.log(myObj);
}
else {
    let keys = Object.entries(myObj);
    console.log(keys);
}
// interface
