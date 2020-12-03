const colors = require('colors/safe')
const fs = require('fs');

let filename = 'map.txt'
let x = 0;
const slopes = [
    "1, 1",
    "3, 1",
    "5, 1",
    "7, 1",
    "1, 2",
]

let trees = [];

slopes.forEach(slope => {
    const slopeRegExp = new RegExp(/(\d),\s(\d)/g);
    slope = slopeRegExp.exec(slope)
    let right = parseInt(slope[1]);
    let down = parseInt(slope[2]);
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        const lineArray = data.split(/\n/g)
        let i = 0
        let x = 0;
        let lineNumber = 1;
        let skipLine = false;
        lineArray.forEach(line => {
            if (isEven(lineNumber) && isEven(down)) skipLine = true;
            if (!skipLine) {
                const dotArray = line.match(/./g);
                if (dotArray[x % dotArray.length] === '#') {
                    i++
                }
                x += right;
            }
            lineNumber++
            skipLine = false;
        });
        console.log(`I crossed through ${i} trees when I went right ${right} and down ${down}!`);
        trees.push(i);
    });
});

setTimeout(() => {
    console.log(`When I multiply all the trees together I get... um.... ${colors.bgYellow(colors.black(multiplyArray(trees)))} trees!`);
}, 1000);


/**
 * Check if number is even or odd
 * @param {Number} value number to check
 */
function isEven(value) {
	if (value%2 == 0)
		return true;
	else
	    return false;
}

/**
 * Multiply Array of Elements
 */
function multiplyArray (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    }
    return sum;
}