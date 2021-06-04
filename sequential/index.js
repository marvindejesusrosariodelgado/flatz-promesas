const { taskOne, taskTwo } = require('./tasks');

async function main() {
    try {
        console.time('Measuring time');
     const results = await promise.all([taskOne(), taskTwo()])
  
console.timeEnd('Measuring time');

console.log('Task One returned', results[0]);
console.log('Task Two returned', results[1]);
    } catch (e) {
        console.log(e);
    }

}

main();