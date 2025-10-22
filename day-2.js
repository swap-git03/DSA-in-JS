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
let discount = 0;
if (amount >= 0 && amount <=5000){
    console.log( amount,'no discount');
}else if(amount>=5001 && amount<=7000) {
    discount = 5;
}else if(amount>=7001 && amount<=9000) {
    discount = 10;
}
else if(amount>=9000) {
    discount = 20;
}
else{
    console.log('noot a amount');
}
console.log(amount - Math.floor((amount*discount)/100));
