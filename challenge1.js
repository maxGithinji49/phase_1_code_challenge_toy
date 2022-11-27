// let myGrade= parseInt(prompt ('What is my score', 'Enter score between 0-100'))
//  if (myGrade >100 || myGrade < 0) {
//     window.alert ('Invalid Entry')
//  }
//  else if (myGrade > 79 && myGrade <=100) {
//      window.alert ('Your Grade is A')
//  }
//  else if (myGrade>=60 && myGrade < 79) {
//      window.alert ('Your Grade is B')
//  }
//  else if (myGrade<59 && myGrade >=49) {
//      window.alert ('Your Grade is C')
//  }
//  else if (myGrade>=40 && myGrade < 49) {
//     window.alert ('Your Grade is D')
//  }
//  else {
//      window.alert ('Your Grade is E')
//  }

const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
input.question("Enter students marks: ", function (myGrade){ 
    let myGrade;
    if (myGrade >100 || myGrade < 0) {
        process.stdout.write ('Invalid Entry')
     }
     else if (myGrade > 79 && myGrade <=100) {
        process.stdout.write('Your Grade is A')
     }
     else if (myGrade>=60 && myGrade < 79) {
        process.stdout.write ('Your Grade is B')
     }
     else if (myGrade<59 && myGrade >=49) {
        process.stdout.write ('Your Grade is C')
     }
     else if (myGrade>=40 && myGrade < 49) {
        process.stdout.write ('Your Grade is D')
     }
     else {
        process.stdout.write ('Your Grade is E')
     }
     input.close ();

})