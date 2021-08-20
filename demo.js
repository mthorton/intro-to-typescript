
// Basic Class
class Animal {
    // Class properties

    // Constructor Function
    constructor(name, legs){
        this.name = name
        this.legs = legs
    }
    // Methods
    speak(){
        console.log(this.name)
    }

}

class Tiger extends Animal {
    #password = 42
    constructor(name, legs, isDanger){
        super(name, legs)
        this.isDanger = isDanger
    }
    //getters
    get password(){
        return this.#password
    }
    set password(n){
        if (typeof n === "number")
            this.#password = n
    }
}

let tiger = new Tiger("bengal", 4, true)
console.log(tiger)
tiger.password = "Hello"
console.log(tiger.password)




// Create an instance of a class
let dog = new Animal("lab", 4)
let cat = new Animal("Calico", 4)

//console.log(dog, cat)


let numbers = [1, 2, 3, 4]
class Template {
    constructor(n){
        this.value = n
    }
}
tNumbers = numbers.map(n => new Template(n))
console.log(tNumbers)