require('colors');
const fs = require('fs');

let filename = 'groupanswers.txt'
let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
let i = 0;

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    const lineArray = data.split('\n\n');
    lineArray.forEach(group => {
        let j = 0;
        group = group.split(/\n/g);
        alphabet.forEach(letter => {
            if (group.every(person => new RegExp(letter).test(person))) {
                j++;
            }
        })
        i += j;
    });
    console.log(`Goodie! Looks like when I add up the count from if everyone\nin the group answered yes, I count ${i.toString().bgYellow.black} questions total!`);
});