require('colors');
const fs = require('fs');

let filename = 'groupanswers.txt'
let i = 0;

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    // Yes, this is done in one line, it amazes me too
    data.split('\n\n').forEach(line => i += [...new Set(line.replace(/\n/g, '').match(/./g))].length);
    // .split() splits the file into groups and puts them into an array
    // .forEach() loops through each group
    // [...new Set()] removes duplicates in the array
    // we take out each new line using .replace()
    // then we put each letter into an array using .match(//g)
    console.log(`Looks like the sum of all the yes' is ${i.toString().bgYellow.black}!`);
});