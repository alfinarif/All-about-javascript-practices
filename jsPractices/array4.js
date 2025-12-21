// Update Array Elements and Fill Array

// Array Fill Manual Way
const arr1 = new Array(10);
for (let i = 0; i < arr1.length; i++){
    arr1[i] = false;
}
// console.log(arr1);

// Array Fill 
const arr2 = new Array(10);
arr2.fill(0);
// console.log(arr2);

// update
const names = ["Arif", "Tafhim", "Hasan"];
names[0] = "Mohammad Arif";
names[1] = "Mohammad Tafhim";
names[2] = "Mohammad Hasan";

// console.log(names);



// Fill Array and Update
const response = new Array(9);
response.fill(false);

for (let i = 0; i < response.length; i++){
    const  rand = Math.floor(Math.random() * 10 + 1);
    response[i] = rand > 5 ? "X" : "O";
}

console.log(response);


// Array is mutable
function update (arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = `${i + 1}: ${arr[i]}`;
    }
    return arr;
}

const updatedArray = update(names);
console.log(names);
console.log(updatedArray);