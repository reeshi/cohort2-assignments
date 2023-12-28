// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// function clearTerminal() {
//     process.stdout.write('\x1Bc');  // Send ANSI escape sequence to clear the terminal
// }

function clock() {
    // show the current time 
    const date = new Date();
    const hours = date.getHours() % 12; // by default getHours() function give hour in 24-hour format.
    const minutes = date.getMinutes();
    const second = date.getSeconds();

    // clearTerminal();

    console.log(`${hours}:${minutes}:${second}`);
}

setInterval(clock, 1 * 1000);