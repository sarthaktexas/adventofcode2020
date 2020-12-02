const fs = require('fs');

let filename = 'passwordlist.txt'

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    const passwordPolicyRegex = new RegExp(/(\d*)-(\d*)\s([a-z]):\s([a-z]*)/);
    const lineArray = data.split('\n');
    let i = 0;
    lineArray.forEach(line => {
        const arrayFromLine = line.match(passwordPolicyRegex); // parse string against RegExp
        if (!arrayFromLine) {
            throw err;
        }
        let pos_1 = parseInt(arrayFromLine[1]) - 1; // position 1 turns into index[0]
        let pos_2 = parseInt(arrayFromLine[2]) - 1;
        let letterToMatch = arrayFromLine[3];
        let password = arrayFromLine[4];
        let filteredPassword = password.match(/./g); // separate string into array by letter
        if ((
            filteredPassword[pos_1] === letterToMatch // if first position has the char
            &&
            filteredPassword[pos_2] !== letterToMatch) // and second position does not
            || (
            filteredPassword[pos_2] === letterToMatch // or if second position has the char
            &&
            filteredPassword[pos_1]!== letterToMatch)) { // and second position does not
            i++ // if it fits, then add to count
        }
    });
    console.log(`${i} passwords fit the new policy!`);
});