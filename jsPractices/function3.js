// function argument
function Sum (x, y){
    return x + y;
}

const sum = Sum(20, 30);
console.log(sum);

// arrow function
const Sub = (x, y) =>{
    return x - y;
}

const p = Sub(50, 10);
console.log(p);

// we can do like this in single line for single return
const div = (x, y) => x / y;

console.log(div(10, 2));