const fs = require('fs');

let filename = 'filename.txt'

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    const lineArray = data.split('\n');
});