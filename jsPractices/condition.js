const yourAge = 20;
const yourBrotherAge = 30;

// const whoIsElder = yourAge > yourBrotherAge;
// console.log(whoIsElder);


// only if statment
// if(yourAge > yourBrotherAge){
//     console.log("you are elder");
// }



// if else statment

// if (yourAge > yourBrotherAge){
//     console.log("You are elder");
// }else{
//     console.log("Your brother is elder");
// }


// if else and else if statment

// if (yourAge > yourBrotherAge){
//     console.log("You are elder");
// }else if(yourAge < yourBrotherAge){
//     console.log("Your brother is elder");
// }else{
//     console.log("You both are same age");
// }




// switch statment =========

const day = 5;

switch (day){
    case 0:
        console.log("Monday");
        break;
    
    case 1:
        console.log("Tuesday");
        break;
    
    case 2:
        console.log("Wednesday");
        break;
    
    case 3:
        console.log("Thursday");
        break;
    
    case 4:
        console.log("Friday");
        break;
    
    case 5:
        console.log("Saturday");
        break;
    
    case 6:
        console.log("Sunday");
        break;
    
    // if does not math the condition we can use default
    default:
        throw new Error("Invalid day");
}



// conditional operator ========

const them = "white";
let bgColor = them == "dark" ? "red" : "blue"; // this is conditional operator

console.log(bgColor);

// if (them == "dark"){
//     bgColor = "white";
// }else{
//     bgColor = "blue";
// }



