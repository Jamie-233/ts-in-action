// number start with 0 increment 
enum Role {
    Owner,
    Guest,
    Reporter,
    Developer,
    Maintainer,
}

console.log(Role);

enum Message {
    Success = 'Success',
    Fail = 'Fail'
}

// 异构
enum Answer {
    N,
    Y = 'Yes'
}

const enum Month {
    Jan,
    Feb,
    Mar,
}

const month = [Month.Feb, Month.Jan, Month.Mar]

enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b = 'banana'}

let e: E = 3
let f: F = 5

let e1: E.a = 1;
let e2 = E.b;
let e3: E.a  =1;

// e1 === e2

// e3 === e1

let g1: G = G.b;
let g2: G.a = G.a