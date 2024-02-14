// условие
if (1 != 2) {
    console.log('true');
} else {
    console.log('false');
}

for (let i = 0; i < 5; i++) {
    console.log('wow')
    if (i == 2) {
    break;
}
}

let x = 'hello'
switch(x) {
    case 'helo':
        console.log('helo');
        break;
    case 'hello':
        console.log('hello');
        break;
    case 'error':
        console.log('error');
        break;
    default:
        console.log('default');
        break;
}

let ifTrue = (1 != 2)
console.log(ifTrue) //

let ifTrue2 = 1 != 2 ? true : false
console.log(ifTrue) //if else

// Логические операторы
// || && !

// Цикл while() do()-while for()
// let obg for (x in obj)

let b = {
    key1: 'hello',
    key2: 'world',
    key3: '!'
}

//console.log('Object.keys(b)', Object.values(b)) 'Object.keys(b) [ \'hello\', \'world\', \'!\' ]'
//Object.keys(b).forEach((key, index)) => {
//    console.log( b[key]) 'hello', 'world', '!'
//})

function mainFunction(a, b, c, d) {

}

//prompt

const arrayFunction = () => {
    
}

let i = 0;
function* gen() {
    yield i;
    yield ++i;
}

let generateValue = gen()

