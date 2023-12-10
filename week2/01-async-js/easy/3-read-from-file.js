// Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'demo.txt');

fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
});

// doing this expensive task.
// after this task over then only the file content will be printed in the console
for(let i=1; i<100000000000; i++){

}

