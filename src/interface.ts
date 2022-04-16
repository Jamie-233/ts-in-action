interface List {
    readonly id: number;
    name: string;
    age?: number
    // [x: string]: any
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach(value => {
        // console.log(value.id);
        if (value.age) {
            console.log(value.age);
        }
    })
}

const result = {
    data: [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
    ]
}

render(result)

// render({
//     data: [
//         {id: 1, name: 'A', gender: 'male'},
//         {id: 2, name: 'B'}
//     ]
// })
// as Result

interface StringArray {
    [index: number]: string
}

let chars: StringArray = ['A', 'B', 'C',];

interface Names {
    [x: string]: string;
    [z: number]: string;
    // y: number
}


// interface Add {
//     (x: number, y: number): number
// }

type Add = (x: string, y: string) => string

let add2: Add = (a, b) => a + b;

interface Lib {
    (): void;
    version: string;
    getVersion(): string;
}

function getLib() {
    const lib: Lib = () => { }
    lib.version = '1.1'
    lib.getVersion = () => {
        return lib.version
    }

    return { ...lib };
}

const lib1 = getLib()
const lib2 = getLib()

console.log(lib1.version);

lib2.version = '12321'
console.log(lib2.version);

console.log('lib1', lib1.getVersion());
console.log('lib2', lib2.getVersion());
