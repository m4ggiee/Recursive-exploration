function getValue() {
    const value = parseInt(prompt(`Enter a value:`));
    return value;
}

const num = getValue();
const degree = getValue();


function pow(num, degree){
   
    if(degree === 0){
        return 1;
    } else if (degree < 0) {
        return 1 / pow(num, -degree);
    } else{
        return num *pow(num, degree - 1);
    }
    
}

let result = pow(num, degree);
alert(result);




// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію

// Ступінь передається як другий аргумент у функцію

// pow(num, degree)