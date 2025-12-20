// Traverse Array Elements

const arr = [13, 21, 63, 44, 15, 99, 4, 85];



// Simple Traverse

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// Array Sum & Avg

let sum = 0;
for (let i = 0; i < arr.length; i++){
    sum += arr[i];
}
// console.log("Total Sum: " + sum);
// Avg
// console.log("Avg Is: " + sum / arr.length);


// Find Large Number
let LargeNumber = 0;
for (let i = 0; i < arr.length; i++){
    if ( arr[i] > LargeNumber){
        LargeNumber = arr[i];
    }
}

console.log("Large Number Is: " + LargeNumber);

// Find Secound Large Number
let secoundLargeNumber = arr[0];
for (let i = 0; i < arr.length; i++){
    if ( arr[i] > secoundLargeNumber ){
        secoundLargeNumber = arr[i];
    }
}

console.log("Secound Large Number Is: " + secoundLargeNumber);


// Find Small Number
let smallNumber = arr[0];
for (let i = 0; i < arr.length; i++){
    if ( arr[i] < smallNumber){
        smallNumber = arr[i];
    }
}

console.log("Small Number Is: " + smallNumber);


// Find Secound Small Number
let secoundSmallNumber = arr[0];
for (let i = 0; i < arr.length; i++){
    if ( arr[i] < secoundSmallNumber && arr[i] > secoundSmallNumber){
        secoundSmallNumber = arr[i];
    }
}

console.log("Secound Small Number Is: " + secoundSmallNumber);