// 36]

// let str = 'swapnil';

// for (let i = 0; i<str.length; i++){
//     console.log(str[i])
// }

// 37] 
// let str = 'swapnil';
// let rev = ''; //->linpaws

// for (let i=str.length-1; i>=0; i--){
//     rev = rev + str.charAt(i)
// }
//     console.log(rev)


// 38] 
let str = prompt('enter string');
let rev = ''; //->linpaws

for (let i=str.length-1; i>=0; i--){
    rev = rev + str.charAt(i)
}
if(rev==str)console.log('is palindrome');
else(console.log('not a palindrome')
)

