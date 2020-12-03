const fs = require('fs');

let filename = 'map.txt'
let i = 0;
let x = 0;

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    const lineArray = data.split(/\n/g)
    lineArray.forEach(line => {
        const dupline = line.concat(line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line, line);
        const dotArray = dupline.match(/./g);
        if (dotArray[x] === '#') {
            i++
        }
        x += 3;
    });
    console.log(`I crossed through ${i} trees!`);
});