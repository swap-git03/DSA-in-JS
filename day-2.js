// Leec 2 : if-else

// 11] can vote or not
// let age = Number(prompt("enter agee"));
// if (age>=18) {
//     console.log('can vote');
    
// } else {
//     console.log('cant vote');
    
// }

// 12] DIScount shop 
let amount = Number(prompt("enter amout"));
if (amount >= 0 && amount <=5000){
    console.log( amount,'no discount');
}else if(amount>=5000 && amount<=7000) {
    console.log(amount - (Math.floor(5*amount)/100))
}
