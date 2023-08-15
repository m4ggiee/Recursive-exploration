function pow(num, degree){
    let result = 1;
    for (let i = 1; i <= degree; i++) {
        result = result * num;
    }
    
    return result;
}

let result = pow(4,2);
console.log(result)


// let degree = 2;
// let num = 2;
// let result = 1;
// for (let i = 1; i <= degree; i++) {
//     result = result * num;
// }
// console.log(result);


// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію

// Ступінь передається як другий аргумент у функцію

// pow(num, degree)