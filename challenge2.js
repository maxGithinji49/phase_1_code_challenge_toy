
//  create a prompt that allows input of the speed limit.
const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

// create a function with nested conditions that allow one to receive an 
// output depending on the value received from the input
input.question("Speed of the car: ", function (speedLimit) {
    let demeritPoints = (speedLimit-70)/5

if (speedLimit<= 70) {
    process.stdout.write("Ok");
}
else if ( speedLimit > 70) {
    process.stdout.write(demeritPoints);
    if (demeritPoints>= 12) {
        process.stdout.write('License suspended');
    }
}
input.close ();

})
