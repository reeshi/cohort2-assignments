// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```
// After the program runs, the output should be
// ```
// hello world my name is raman
// ```
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'demo.txt');

const data = fs.readFileSync(filePath, 'utf-8');
const wordsArr = data.trim().split(" ");

parsedData = wordsArr.reduce((acc, val) => {
    if (val.length) {
        acc = acc.length ? acc + " " + val : val;
    }
    return acc;
}, "")
console.log(parsedData);

// writing the sanitize data into file.
fs.writeFileSync(filePath, parsedData);
console.log("Successfully updated file");
