let a = [1, 2, 3, 4]

let b = a.map((item) => {
    return item * item
})

// console.log(b)

let c = b.map((item) => {
    return item * 10
}).filter((item) => {
    return item >= 100
})

// console.log(c)

let d = ['A', 'AB', 'ABC']

// console.log(d.every((item) => {
//     return item.length > 2
// }))

// console.log(d.some((item) => {
//     return item.length > 2
// }))

let e = [1, 2, 3, 4, 5, 6]
let sum = e.reduce((s, item) => {
    return s + item
}, 0)
// console.log(sum)
let factorial = e.reduce((s, item) => {
    return s * item
}, 1)
// console.log(factorial)

let f = ['A', 'B', 'C', 'D']
let joined = f.reduceRight((s, item) => {
    return s + item
}, '')
// console.log(joined)



// let Animal = function(name) {
//     this.name = name
// }
// Animal.prototype.run = function () {
//     console.log(`${this.name} runs`)
// }
//
// let Cat = function (name, color) {
//     Animal.call(this, name)
//     this.color = color
// }
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat
//
// let tom = new Cat('Tom', 'Black')
// console.log(tom)
// tom.run()

// Cat.prototype.run = function () {
//     console.log(`Cat ${this.name} of color ${this.color} runs`)
// }
// tom.run()

// let Dog = function (name, color, age) {
//     Animal.call(this, name)
//     this.color = color
//     this.age = age
//     let self = this
//
//     this.saysAnotherHello = function () {
//         sayHello()
//         console.log('Again')
//     }
//
//     let sayHello = function () {
//         console.log(`Dog ${self.name} says hello`)
//     }
// }
// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog
//
// let dog = new Dog('DogA', 'White', 3)
// dog.saysAnotherHello()

class Animal {
    constructor(name) {
        this._name = name
    }

    sayHello() {
        console.log(`${this._name} says hello`)
    }
}

// let cat = new Animal('Tom')
// console.log(cat)
// cat.sayHello()

class Cat extends Animal {
    constructor() {
        super();
    }

    sayHello() {
        super.sayHello();
    }
}


















