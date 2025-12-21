// Array of Anything

const arr = [10, 'Ten', true, getTen, {ten: 10}, [10, 10]];
// console.log(arr);

function getTen() {
    return 10;
}

// Array of Objects
const favChannels = [
    {name: 'Stack Learner', url: 'htttps://youtube.com/stacklearner'},
    {name: 'Js Bangladesh', url: 'htttps://youtube.com/jsbangladesh'},
    {name: 'Traversy Media', url: 'htttps://youtube.com/techguyweb'},
    {name: 'Wes Bos', url: 'htttps://youtube.com/wesbos'},
]

// Array of function
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, mul, div, mod];
const a = 10,
      b = 20;

for (let i = 0; i < funcs.length; i ++){
    const result = funcs[i](a, b);
    // console.log(`[${funcs[i].name}] Result = ${result}`);
}



// Array of Array
const pointTable = [
    [0, 0],
    [3, 5],
    [5, 7],
    [10, 23],
];


// One Dimensional Traverse
for (let i = 0; i < pointTable.length; i++){
    // console.log(`Point ${i} - x = ${pointTable[i][0]} and y = ${pointTable[i][1]}`);
}

// Two Dimensional Traverse
const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let i = 0; i < numbers.length; i++){
    for (let j = 0; j < numbers[i].length; j++){
        // console.log(numbers[i][j]);
    }
}

// Metrix Example

const metrixA = [
    [1, 3],
    [1, 0],
    [1, 2],
];

const metrixB = [
    [0, 0],
    [7, 5],
    [2, 1],
];

const metrixSum = (metrixA, metrixB) =>{
    const result = []
    for (let i = 0; i < metrixA.length; i++){
        const row = [];
        for (let j = 0; j < metrixA[i].length; j++){
            row.push(metrixA[i][j] + metrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

const metrixC = metrixSum(metrixA, metrixB);
console.log(metrixC);