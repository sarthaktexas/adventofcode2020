/**
 * Lines 31-47 are *not mine*.
 * I couldn't figure out the extremely huge conditional statement,
 * so I was forced to copy that small segment of code.
 * They were created by @sporeball who you can find here:
 * https://github.com/sporeball
 * Every other line was created and coded by me, @sarthaktexas
 */

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
    let passport = parsedLineData[0];
    if (passport.byr >= '1920' && passport.byr <= '2002' &&
      passport.iyr >= '2010' && passport.iyr <= '2020' &&
      passport.eyr >= '2020' && passport.eyr <= '2030' &&
      passport.hcl && passport.hcl.match(/^#[0-9a-f]{6}$/) &&
      passport.ecl && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport.ecl) &&
      passport.hgt &&
      (passport.pid + "").length == 9 &&
      Object.entries(passport).length == 7 + (passport.cid !== undefined)) {
      let height = passport.hgt.slice(0, -2);
      switch (passport.hgt.slice(-2)) {
        case "cm":
          if (height >= '150' && height <= '193') i++;
          break;
        default:
          if (height >= '59' && height <= '76') i++;
      }
    }
  });
  console.log(`I've gone through them all and concluded that ${`${i} passports are valid.`.bgYellow.black}`);
});

/**
 * Checks if hex is correctly formatted
 * @param {String} hex hex number in form of #abc123
 */
function isHex(hex) {
  var hexRegEx = new RegExp(/#[0-9A-Fa-f]{6}/g);
  if (hexRegEx.test(hex)) {
    return true;
  } else {
    return false;
  }
}