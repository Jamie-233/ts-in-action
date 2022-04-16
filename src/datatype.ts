const bool: boolean = true;
let num: number | undefined | null = 123;
const str: string = 'ts';

const arr1: number[] = [1, 2, 3, 4]
const arr2: Array<number | string> = [1, 2, 4, 5, '123']

const tuple: [number, string] = [0, '1']
// tuple.push('da')
// console.log(tuple);
// tuple[2]

const add = (x:number, y:number) => x + y;

let compute: (x: number, y: number) => number;
compute = (x, b) => x + b;

// const obj: object = { x: 1, y: 2 }
const obj: {x: number, y: number} = { x: 1, y: 2 }
obj.x = 1

const s1: symbol = Symbol();
const s2 = Symbol();

let un: undefined = undefined
let nu: null = null


// strictNullChecks
num = undefined
num = null

// void
let noReturn = () => {}

