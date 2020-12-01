const fs = require('fs');

let filename = 'expensereport.txt'
let sum = 2020;

fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;
  const array = data.split('\n');
  for (var n = 0; n < array.length; n++) array[n] = +array[n];
  let i = 0;
  while (array) {
    let a = array[i];
    array.forEach(number_1 => {
      let firstNumber = number_1;
      array.forEach(number_2 => {
        let secondNumber = number_2;
        let calculatedSum = number_1 + number_2 + a;
        console.log(`i'm adding ${a} and ${firstNumber} and ${secondNumber} and i got ${calculatedSum}`);
        if (calculatedSum === sum) {
          let multipliedNumbers = firstNumber * secondNumber * a;
          throw `FOUND ITTTT looks like ${a} and ${firstNumber} and ${secondNumber} add to get ${calculatedSum} and multiply to get ${multipliedNumbers} YAHOOOOOOO`;
        }
      });
    });
    i++;
    if (i === array.length) {
      break;
    }
  }
});