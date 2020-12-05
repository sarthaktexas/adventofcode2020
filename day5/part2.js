const colors = require('colors/safe');
const fs = require('fs');

let filename = 'boardingpasses.txt'
let i = 0; // Highest Seat ID
let seatIDs = [];
let santasSeat;

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    const lineArray = data.split('\n');
    lineArray.forEach(line => {
        let letters = line.match(/./g);
        const rowModifiers = letters.slice(0, 7); // take off last three letters;
        const colModifiers = letters.slice(7, letters.length);
        let row; let col;
        let maxRow = 128; let minRow = 0; // 128 rows
        let maxCol = 8; let minCol = 0; // 8 cols
        rowModifiers.forEach(letter => {
            switch (letter) {
                case 'F':
                    beforeMaxRow = maxRow;
                    maxRow = maxRow - ((maxRow - minRow) / 2);
                    // console.log(`I found an F, let me change maxRow from ${beforeMaxRow} to ${maxRow / 2} so I'm looking at [${minRow - 1}, ${maxRow - 1}]`)
                    break;
                case 'B':
                    beforeMinRow = minRow;
                    minRow = maxRow - ((maxRow - minRow) / 2);
                    // console.log(`I found an B, let me change minRow from ${beforeMinRow} to ${maxRow} so I'm looking at [${maxRow - 1}, ${maxRow - 1}]`)
                    break;
                default:
                    break;
            }
        });
        colModifiers.forEach(letter => {
            switch (letter) {
                case 'L':
                    beforeMaxCol = maxCol;
                    maxCol = maxCol - ((maxCol - minCol) / 2);
                    // console.log(`I found an L, let me change maxCol from ${beforeMaxCol} to ${maxCol / 2} so I'm looking at [${minCol - 1}, ${maxCol - 1}]`)
                    break;
                case 'R':
                    beforeMinCol = minCol;
                    minCol = maxCol - ((maxCol - minCol) / 2);
                    // console.log(`I found an R, let me change minCol from ${beforeMinCol} to ${maxCol} so I'm looking at [${maxCol - 1}, ${maxCol - 1}]`)
                    break;
                default:
                    break;
            }
        });
        if (minRow = maxRow) {
            row = minRow - 1;
            // console.log(`Row: ${row}`);
        }
        if (minCol = maxCol) {
            col = minCol - 1;
            // console.log(`Col: ${col}`);
        }
        let seatID = row * 8 + col;
        seatIDs.push(seatID);
        // console.log(`Seat ID: ${seatID}`);
        if (seatID > i) {
            i = seatID;
        }
    });
    seatIDs.sort(function(a, b) {
        return a - b;
      });
    seatIDs.forEach((seat, index) => {
        if (seat + 1 !== seatIDs[index + 1] && seat !== 938 && seat !== 70) {
            santasSeat = seatIDs[index] + 1;
        }
    });
    console.log(`Where is my seat? It's not in the beginning, and not in the end, so the only number I'm missing is ${colors.bgYellow.black(santasSeat)}!`);
});