/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const startDate = new Date();
    let sum = 0;
    // const startTime = data.getTime();
    console.log("startTime : ", startDate);
    for (let i = 1; i < n; i++) {
        sum += 1;
    }
    // const endTime = data.getTime();
    const endDate = new Date();
    console.log("startTime : ", endDate);
    console.log("diff : ", (endDate - startDate) / 1000);
    return (endDate - startDate)/1000;
  //return 0.01;
}

const time = calculateTime(10000000000);
// console.log(time);
