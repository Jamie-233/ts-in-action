// 类型兼容性
// 当一个类型Y可以被赋值给另一个类型X时 可以说类型X兼容类型Y
// X兼容Y: X(目标类型) = Y(源类型)


// 结构之间兼容: 成员少的兼容成员多的
// 函数之间兼容: 参数多的兼容参数少的

let s: string = 'a';
// s = null

// 接口兼容性
interface X {
    a: any;
    b: any;
}

interface Y {
    a: any;
    b: any;
    c: any;
}

let x: X = {a:1, b:2}
let y: Y = {a:1, b:2, c:3}
x = y
// y = x


// 函数兼容性
type Handler = (a: number, b: number) => void;

function hof(handler: Handler) {
    return handler
}

// 1)参数个数
const handler1 = (a: number) => {}
const handler2 = (a: number, b: number, c:number) => {}

hof(handler1)
// hof(handler2)

// 可选参数和剩余参数
let a = (p1: number, p2:number) => {}
let b = (p1?: number, p2?:number) => {}
let c = (...args: number[]) => {}

a = b
a = c
// b = c
// b = a
c = a
c = b

// 参数类型
let number3 = (a: string) => {}
// hof(number3)

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}

let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}

// 双向协变: 函数参数可以相互赋值 精确赋值给不精确
p3d = p2d
// p2d = p3d

// 3)返回值类型
let ff = () => ({name: "Alice"})
let gg = () => ({name: "Alice", location: "Beijing"})

ff = gg;
// gg = ff;

function overload(a: number, b:number): number;
function overload(a: string, b:string): string;
function overload(a: any, b:any): any {}

// 枚举类型
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple

// 类兼容性
class A {
    static s = 1;
    constructor(p: number, q: number) {}
    id: number = 1;
    private name: string = ''
}

class B {
    static s = 1;
    constructor(p: number) {}
    id: number = 1;
    private name: string = ''
}

let aa = new A(1, 2)
let bb = new B(1)

// aa == bb;
// bb == aa;
// 父类 子类 实例可以相互兼容
class CC extends A {}
let cc = new CC(1, 2);
aa == cc
cc == aa

// 泛型兼容性
interface Empty<T> {
    value: T
}

// let obj1: Empty<number> = {};
// let obj2: Empty<number> = {};
// obj1 = obj2

let log11 = <T>(x: T): T => {
    console.log('x');
    return x;
}

let log22 = <T>(x: T): T => {
    console.log('x');
    return x;
}

log11 = log22

