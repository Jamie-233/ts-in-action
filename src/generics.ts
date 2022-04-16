class Log<T> {
    run(value: T) {
        console.log(value);
        return value;
    }
}

const log1 = new Log<number>()
log1.run(1)

const log2 = new Log();
log2.run('1');

interface Length {
    length: number
}

function log<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value;
}

log([1])
log('12')
log({ length: 1 })

// log<string[]>(['a', 'b'])
// log(['a', 'b'])

// // type Log = <T>(value: T) => T

// // const myLog: Log = log

// interface Log<T = string> {
//     (value: T): T
// }

// const myLog: Log = log
// // const myLog: Log<number> = log

// myLog('1')
// // myLog(1)