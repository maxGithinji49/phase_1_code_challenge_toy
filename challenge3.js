const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

input.question ('What is your gross salary', 
      function (glossSalary) {
        let Paye;
        let taxableIncome;
        let NHIF;
        let NSSF= 200
        let myDeductions;
        let netSalary;

        if (glossSalary <=24000) {
            Paye= glossSalary*0.1
        }
        else if (glossSalary >= 24001 && glossSalary <= 32333) {
            Paye= 24000;
            taxableIncome= grossSalary - 24000;
            Paye= (taxableIncome*0.25)+ Paye;
        }
        else {
            Paye = 4483;
            taxableIncome= grossSalary - 32333
            Paye= (taxableIncome*0.30)+ Paye
        }

        if (glossSalary < 6000) {
            NHIF= 150
            return NHIF;
        }
        else if (glossSalary< 8000) {
            NHIF= 300
            return NHIF;
        }
        else if (glossSalary< 12000) {
            NHIF= 400
            return NHIF;
        }
        else if (glossSalary< 15000) {
            NHIF= 500
            return NHIF;
        }
        else if (glossSalary< 20000) {
            NHIF= 600
            return NHIF;
        }
        else if (glossSalary< 25000) {
            NHIF= 750
            return NHIF;
        }
        else if (glossSalary< 30000) {
            NHIF= 850
            return NHIF;
        }
        else if (glossSalary< 35000) {
            NHIF= 900
            return NHIF;
        }
        else if (glossSalary< 40000) {
            NHIF= 950
            return NHIF;
        }
        else if (glossSalary< 45000) {
            NHIF= 1000
            return NHIF;
        }
        else if (glossSalary< 50000) {
            NHIF= 1100
            return NHIF;
        }
        else if (glossSalary< 60000) {
            NHIF= 1200
            return NHIF;
        }
        else if (glossSalary< 70000) {
            NHIF= 1300
            return NHIF;
        }
        else if (glossSalary< 80000) {
            NHIF= 1400
            return NHIF;
        }
        else if (glossSalary< 90000) {
            NHIF= 1500
            return NHIF;
        }
        else if (glossSalary< 100000) {
            NHIF= 1600
            return NHIF;
        }
        else {
            NHIF= 1700
            return NHIF;
        }
        
        myDeductions= Paye + NHIF + NSSF
        netSalary= glossSalary - myDeductions

        process.stdout.write(glossSalary);
        process.stdout.write(Paye);
        process.stdout.write(NHIF);
        process.stdout.write(NSSF);    
        process.stdout.write(myDeductions);
        process.stdout.write(netSalary);

        input.close ();
      })