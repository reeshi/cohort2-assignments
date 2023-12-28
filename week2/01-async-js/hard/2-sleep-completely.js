/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    const startTime = new Date().getSeconds();
    let currentTime = startTime;
    while (currentTime - startTime <= seconds){
        currentTime = new Date().getSeconds();
    }
}

sleep(10);    