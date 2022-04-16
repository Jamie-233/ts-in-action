// 类型保护

// TS 能够在特定的区块中保证变量属于某种特定的类型
// 可以在区块中放心的引用此类型的属性, 或者调用此类型的方法.

enum Type {Strong, Week}

class Java {
    helloJava() {
        console.log('hello Java');
    }
    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('hello JavaScript');
    }
    javascript: any
}

// 4) 类型保护函数 类型谓词 "is"
function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
    const lang = type === Type.Strong ? new Java() : new JavaScript()

    // if((lang as Java).helloJava) {
    //     (lang as Java).helloJava()
    // } else {
    //     (lang as JavaScript).helloJavaScript()
    // }

    // 1) instanceof
    // if(lang instanceof Java) {
    //     lang.helloJava();
    // } else {
    //     lang.helloJavaScript()
    // }

    // 2) in
    // if('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }
    
    // 3) typeof

    // if(typeof x === 'string') {
    //     x.length
    // }
    // else {
    //     x.toFixed(2)
    // }

    if(isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }

    return lang
}
