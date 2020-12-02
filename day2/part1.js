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
        let min = arrayFromLine[1];
        let max = arrayFromLine[2];
        let letterToFind = arrayFromLine[3];
        let password = arrayFromLine[4];
        // split password into array of letters then take out the letters we're not looking for
        let filteredPassword = password.match(/./g).filter(letter => letter.includes(letterToFind));
        if (filteredPassword.length >= min && filteredPassword.length <= max) { // check if the array of letters matches the two conditions
            i++ // add to count if matches conditions
        }
    });
    console.log(`${i} passwords fit the policy!`);
});