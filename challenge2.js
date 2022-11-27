const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

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

})
