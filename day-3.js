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
// let num = Number(prompt('enter a num'));
// if (isNaN(num)) {
//     console.log('not a num');

// } else {
//     let factor = 1;
//     for (let i = 1; i<=Math.floor(num/2); i++) {
//         if(num%i === 0){
//             console.log(i);
//         }
//     }    console.log(num);

// }


// 20] to check is the given no. is prime or not
// let num = Number(prompt('enter a num'));
// if (isNaN(num)) {
//     console.log('not a num');

// } else {
//     let isPrime = true;
//     for (let i = 2; i<=Math.floor(num/2); i++) {
//         if(num%i === 0){
//             isPrime = false;
//         }break;
//     }    console.log(isPrime);

// }

// While Loop
// 21] to find the sum of given digits 
// let num = Number(prompt('enter a num'));
// if (isNaN(num)) {
//     console.log('not a num');
// }
// else {
//     if (num > 0) {
//         let sum = 0;
//         while (num > 0) {
//             let rem = num % 10;
//             sum = sum + rem;
//             num = Math.floor(num / 10);
//         } console.log((sum));
//     }
// }

// 22] to reverse a given Number
// let num = Number(prompt('enter a num'));
// if (isNaN(num)) {
//     console.log('not a num');
// }
// else {
//     if (num > 0) {
//         let rev = 0;
//         while (num > 0) {
//             let rem = num % 10;
//             rev = rev * 10 + rem;
//             num = Math.floor(num / 10);
//         } console.log((rev));
//     }
// }


// 23] to ask user values untill he sayshello 
let user = prompt('enter something');

do {
  console.log(user);
  user = prompt('enter something');  // ✅ update user each time
} while (user !== hello);          // ✅ stop when user types "hello"

