// 15] print n hello worlds
// for (let i = 1; i<10; i++){
//     console.log('hello world');
// }



// 16] print n numbers 
// for ( let j = 1; j<25;j++){
//     console.log('j = ',j);
// }

// 17] sum of n numbers

// let num = Number(prompt('enter a num'));

// if (isNaN(num)) {
//     console.log('not a num');

// } else {
//     let sum = 0;
//     for (let i = 1; i<=num; i++) {
//         sum = sum+ i
//     };
//     console.log('the sum of your number is :', sum); //write out side of the loop so the statement dont get rewriitten again and again
// }

// 18] factorial of n numbers 
// let num = Number(prompt('enter a num'));

// if (isNaN(num)) {
//     console.log('not a num');

// } else {
//     let facto = 1;
//     for (let i = 1; i<=num; i++) {
//         facto = facto * i
//     };
//     console.log('the factorial of your number is :', facto); //facto should not be defined from 0

// }


// 19]to find factors 
let num = Number(prompt('enter a num'));
if (isNaN(num)) {
    console.log('not a num');

} else {
    let factor = 1;
    for (let i = 1; i<=Math.floor(num/2); i++) {
        if(num%i === 0){
            console.log(i);
        }
    }    console.log(num);

}