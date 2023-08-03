function Person(name) {
    this.name = name;
    this.son = null;
}

function Baby(name, sex) {
    Person.call(this, name);
    this.sex = sex;
    this.dad = null;
    this.mom = null;
}

let alan = new Person("alan");
let aria = new Baby("Aria", "girl")

alan.son = aria;
aria.dad = alan
console.log(aria.dad)
console.log(alan.son);

console.log(aria instanceof Baby)


checkIfInstanceOf = function(obj, classFunction) {
    if(obj === null || obj === undefined || typeof classFunction !== 'function') {
        return false;
    }

    let currPrototype = Object.getPrototypeOf(obj)
    console.log(currPrototype)
    while(currPrototype !== null) {
        if(currPrototype === classFunction.prototype) {
            return true;
        }
        currPrototype = Object.getPrototypeOf(currPrototype);


    }

    //code analisis
    return false
}

console.log(checkIfInstanceOf(alan, Person))
console.log(checkIfInstanceOf(542, Number))
console.log(checkIfInstanceOf(542, String))
let a = new Date();
let a2 = Object.getPrototypeOf(a)

console.log(Object.getPrototypeOf(a2))
