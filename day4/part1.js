require('colors');
const fs = require('fs');

let filename = 'passports.txt'
let i = 0;

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;
    const lineArray = data.split('\n\n');
    lineArray.forEach((line, lineNumber) => {
        line = line.replace(/\n/g, ' ');
        const lineData = line.split(' ');
        let paramList = '{\n';
        let parsedLineData = [];
        lineData.forEach((param, index) => {
            let paramRegex = new RegExp(/([a-z]*):(.*)/);
            const parsedParam = param.match(paramRegex);
            if (index === lineData.length - 1) {
                paramList += `"${parsedParam[1]}": "${parsedParam[2]}"\n`;
            } else {
                paramList += `"${parsedParam[1]}": "${parsedParam[2]}",\n`;
            }
        });
        paramList += '}';
        parsedLineData.push(JSON.parse(paramList));
        if (parsedLineData[0].byr && parsedLineData[0].iyr && parsedLineData[0].eyr && parsedLineData[0].hgt && parsedLineData[0].hcl && parsedLineData[0].ecl && parsedLineData[0].pid) {
            i++
        }
    });
    console.log(`I've gone through them all and concluded that ${`${i} passports are valid.`.bgYellow.black}`);
});