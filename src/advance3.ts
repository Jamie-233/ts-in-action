// 交叉类型与联合类型
// 讲所有类型合并为一个类型 新的类型有所有的特性 (适合对象混用场景)

interface DogInterface {
    run(): void
}

interface CatInterface {
    jump(): void
}

// 交叉类型是取所有类型的并集
const pet: DogInterface & CatInterface = {
    run() {
        console.log('run');
    },
    jump() {
        console.log('run');
    }
}

// # 联合类型 声明的类型并不确定 可以为多个类型中的一个
let a1: number | string = 1
let b2: 'a' | 'b' | 'c'
let c3: 1 | 2 | 3

class DogDog implements DogInterface {
    run() { }
    eat() { }
}

class CatCat implements CatInterface {
    jump() { }
    eat() { }
}

enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new DogDog() : new CatCat()
    pet.eat();
    // pet.run()
    // pet.jumper ()
    return pet
}

interface Square {
    kind: 'square'
    size: number
}
interface Rectangle {
    kind: 'rectangle'
    width: number
    height: number
}
interface Circle {
    kind: 'circle'
    r: number
}

type Shape = Square | Rectangle | Circle
function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size
        case "rectangle":
            return s.height * s.width
        case "circle":
            return Math.PI * s.r ** 2
        default:
            return ((e: never) => { throw new Error(e) })(s)
    }
}

// console.log(area({ kind: 'circle', r: 1 }));


// # 索引类型
const obj3 = {
    a: 1,
    b: 2,
    c: 3,
}

// 约束 keys 里的属性 一定是 obj 中的元素
function getValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}

console.log(getValue(obj3, ['a', 'b']));
// console.log(getValue(obj3, ['e', 'f']));

interface Obj_ {
    a: number,
    b: string
}

// 查询操作赋 keyof T: 类型T所有公共属性字面量的联合类型
// let key: "a" | "b"
let key: keyof Obj_

// 索引访问操作符
// T[K]
let value1: Obj_['a']

// T extends U 泛型约束, 泛型变量可以继承某个类型获得某些属性

// # 映射类型 (可以从一个旧的类型生成一个新的类型) (把一个类型属性变为只读)
// 同态 只会作用于Object类型 不会引入新的属性
interface Boj {
    a: string
    b: number
    c: boolean
}

type ReadonlyObj = Readonly<Boj>

// Partial 把接口所有属性变为可选
type PartialObj = Partial<Boj>

// Pick 抽取 Obj 中的子集
type PickObj = Pick<Boj, 'a' | 'b'>
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// 可索引类型的泛型接口
// keyof T 索引类型的查询操作符, 表示类型T所有属性的联合类型
// P in (for in) 会把P属性依次绑定到T的所有属性上
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };

// 非同态
type RecordObj = Record<'x'|'y', Boj>


// # 条件类型
// 由条件表达式决定的类型
// T extends U ? X : Y
// 如果 T 可以被赋值给类型 U 那么就是 X类型 否则就是 Y类型
type TypeName<T> =
    T extends string ? 'string' :
    T extends number ? 'number' :
    T extends boolean ? 'boolean' :
    T extends undefined ? 'undefined':
    T extends Function ? 'function': "object"

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// 分布式条件类型
// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)

// 类型的过滤
type T3 = TypeName<string | string[]>

//  T extends U T可以赋值给U 结果类型就是never 否则就是T类型
type Diff<T, U> = T extends U ? never : T

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// 过滤掉了第二个参数中的类型 a

// Diff 会被拆解为多个条件类型的联合类型
// 1) <Diff 'a', 'a' | 'e'> <Diff 'b', 'a'| 'e'> <Diff 'c', 'a'| 'e'>
// 2) 'a', 'a' | 'e' 可以被赋值给联合类型 => never
// 3) 'b', 'a'| 'e' 不可以赋值给字面量联合类型 => b
// 3) 'c', 'a'| 'e' 不可以赋值给字面量联合类型 => c
// never | 'b' | 'c'
// 'b' | 'c'

// 基于Diff做扩展 在类型中去除 undefined 和 null
type NotNull<T> = Diff<T, undefined | null>

type T5 = NotNull<string | number | undefined | null>

// Diff 内置类型: Exclude<T, U> 从类型T中过滤掉可以赋值给类型U的类型
// NotNull: NonNullable<T>
// Extract<T, U> 从类型T中抽取出可以赋值给类型U的类型

type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>
const t6: T6 = 'a'

// ReturnType<T> 获取函数返回值类型
type T7 = ReturnType<() => string>
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// T 可以被赋值给一个函数
// infer 待推断 延迟推断

