const fs = require('fs');

let filename = 'filename.txt'
let i = 0;

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    const lineArray = data.split('\n');
    lineArray.forEach(line => {
        console.log(line);
        i++
    });
});