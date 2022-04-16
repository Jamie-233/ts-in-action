// class Dog {
//     constructor(name: string) {
//         this.name = name;
//     }

//     public name: string
//     private pri() {}
//     protected pro() {}
//     readonly legs: number = 4
//     static food: string = 'bones'
//     run() {}
// }


// const dog = new Dog('wang');
// // console.log(Dog.prototype);
// // console.log(Dog.food);
// // console.log(dog);

// class Husky extends Dog {
//     constructor(name: string, public color: string) {
//         super(name)
//         this.color = color;
//         this.pro()
//         // ! this.pri()
//     }

//     // ~ color: string
// }

// const husky = new Husky('husky', 'red');

// console.log(husky);
// console.log(Husky.food);


// 抽象类

 abstract class Animal {
    eat() {
        console.log('eat');
    }

    abstract sleep(): void
 }

 class Dog extends Animal {
    constructor(name: string) {
        super();
        this.name = name;
    }

    name: string
    run() {}
    sleep() {
        console.log('Dog sleep');
    }
 }


//  const animal = new Animal()
const dog = new Dog('husky');
// dog.eat()
// dog.sleep()

class Cat extends Animal {
    constructor() {
        super()
    }

    sleep() {
        console.log('Cat Sleep');
    }
}

const cat = new Cat();

const animal: Animal[] = [dog, cat];
animal.forEach(i => {
    i.sleep()
})

class Workflow {
    step1() {
        console.log('step1');
        return this
    }
    step2() {
        console.log('step2');
        return this
    }
}

// new Workflow().step1().step2()

class MyFlow extends Workflow {
    next() {
        console.log('next');
        return this
    }
}

new MyFlow().next().step1().step1().step2()