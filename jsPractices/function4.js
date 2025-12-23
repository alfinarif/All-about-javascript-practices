// function sayHello (name){
//     console.log("Hello ", name);
// }

// const sayHi = sayHello;
// sayHi("Mohammad Arif");



// inner function example

function displayTable (n) {
    const isOdd = (n) => n % 2 !== 0;
    const isEven = (n) => n % 2 == 0;


    for (let i = 0; i < n; i++){
        if (isOdd(i)){
            console.log("Table Row [#000] -", i + 1);
        }else if(isEven(i)){
            console.log("Table Row [#fff] -", i + 1);
        }
        
    }
}

// displayTable(10);


// callback function ============

// const arr = [1, 2, 3, 4];
// let sum = 0;
// arr.forEach((v)=>{
//     // console.log("Value", v)
//     sum += v;
// })

// console.log(sum);

function toUpper(str, cb){
    const upper = str.toUpperCase();
    cb(upper);
}

toUpper("mohammad arif", (str)=>{
    console.log(str);
});


