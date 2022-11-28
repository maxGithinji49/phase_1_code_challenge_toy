// creates a prompt interface allowing one to input a scor
// 
const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
//  based on the score, the conditionals offer a grade.
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