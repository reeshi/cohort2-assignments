// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'demo.txt');
const writeData = "writing the file..."

// writeFile function will overide the content of a file.
fs.writeFile(filePath, writeData, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// appendFile function will append the new content in a file.
const appendData = "\nappend the data...";
fs.appendFile(filePath, appendData, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});