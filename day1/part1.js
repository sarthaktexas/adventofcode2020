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
    let calculatedSum;
    let foundNumber;
    array.forEach(number => {
      foundNumber = number;
      calculatedSum = number + a;
      console.log(`i'm adding ${foundNumber} and ${a} and i got ${calculatedSum}`);
      if (calculatedSum === sum) {
        let multipliedNumbers = a * foundNumber;
        throw `FOUND ITTTT looks like ${a} and ${foundNumber} add to get ${sum} and multiply to get ${multipliedNumbers} YAHOOOOOOO`;
      }
    });
    i++;
    if (i === array.length) {
      break;
    }
  }
});