// All About Object

// const persons = {
    
// }

// console.log(typeof persons);

// const person1 = {};
// person1.name = "Arif";
// person1.lname = "Alfin";
// person1.email = "alfin@gmail.com";

// // console.log(person1);
// // console.log(person1.email);


// const person2 = {
//     fname : "Mohammad",
//     lname : "Arif",
//     email : "alfin@gmail.com"
// }

// // update object
// person2.id = "2434";
// person2.phone = "0506897109";

// // remove from object
// delete person2.id;
// delete person2.email;

// // console.log(person2);
// // console.log(person2.email);



// // Array of Object

// const p1 = {
//     name : "Arif",
//     email: "alfin@gmail.com",
// };

// const p2 = {
//     name : "Mohammad",
//     email : "mohammad@gmail.com",
// };

// const p3 = {
//     name : "Alfin",
//     email : "alfin@gmail.com",
// };

// const people = [p1, p2, p3];

// console.log(people);

// console.log(people[0].email);
// console.log(people[1].name);

// example
const peoples = [
    {
        name : "Arif",
        email: "alfin@gmail.com",
    },
    {
        name : "Mohammad",
        email : "mohammad@gmail.com",
    },
    {
        name : "Alfin",
        email : "alfin@gmail.com",
    }
];

// console.log(peoples);

for (let p of peoples){
    console.log(`${p.name} (${p.email})`)
}


