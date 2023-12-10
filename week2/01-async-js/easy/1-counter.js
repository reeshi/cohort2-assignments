// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0;
function updateCounter() {
    counter++;
    console.log(counter);
    // belowe code will stop the conter after 5.
    // if(counter === 5){
    //     clearInterval(interval);
    // }
}

const interval = setInterval(updateCounter, 1 * 1000);