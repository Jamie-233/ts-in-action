function add1(x: string, y: string) {
    return x + y;
}

let add22: (x: number, y: number) => number

type add3 = (x: string, y: string) => string

interface add4 {
    (x: number, y: string): number
}

function add5(x: number, y?: number) {
    return y ? x + y : x
}

add5(5, 1)

function add6(x: number, ...rest: number[]) {
    return x + rest.reduce((prev, cur) => prev + cur);
}

// console.log(add6(1, 3, 4, 5, 1, 6, 7, 989));

function add7(...rest: number[]): number;
function add7(...rest: string[]): string;
function add7(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }
    if (typeof first === 'number') {
        return rest.reduce((prev, cur) => prev + cur);
    }
}

console.log(add7(1, 2, 3, 4));
console.log(add7('1', '2', '3'));
