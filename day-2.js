// Leec 2 : if-else

// 11] can vote or not
// let age = Number(prompt("enter agee"));
// if (age>=18) {
//     console.log('can vote');
    
// } else {
//     console.log('cant vote');
    
// }

// 12] DIScount shop 
// let amount = Number(prompt("enter amout"));
// let discount = 0;
// if (amount >= 0 && amount <=5000){
//     console.log( amount,'no discount');
// }else if(amount>=5001 && amount<=7000) {
//     discount = 5;
// }else if(amount>=7001 && amount<=9000) {
//     discount = 10;
// }
// else if(amount>=9000) {
//     discount = 20;
// }
// else{
//     console.log('noot a amount');
// }
// console.log(amount - Math.floor((amount*discount)/100));


// 13] Bijli Bill
// let units = Number(prompt('Enter units'))
// console.log('units are',units);
// let amount = 0;


// if (units > 400) {
//     amount = (units - 400) * 13; //3900
//     units = 400;
// }
// if (units > 200 && units <=400 ) {
//     amount += (units - 200) * 8; //1600
//      units = 200;

// }
// if (units > 100 && units <=200 ) {
//     amount += (units - 100) * 6; //1600
//     units = 100;

// }
// amount += units* 4//400
// console.log(amount);


// 14] INR Distributioon
// let amount = 4888;
// if(amount >500){
//     console.log('500 rs notes will be :' + Math.floor(amount/500));
//     amount = amount%500;
// }
// if(amount >200){
//     console.log('200 rs notes will be :' + Math.floor(amount/200));
//     amount = amount%200;
// }
// if(amount >100){
//     console.log('100 rs notes will be :' + Math.floor(amount/100));
//     amount = amount%100;

// }if(amount >50){
//     console.log('50 rs notes will be :' + Math.floor(amount/50));
//     amount = amount%50;
// }if(amount >20){
//     console.log('20 rs notes will be :' + Math.floor(amount/20));
//     amount = amount%20;
// }if(amount >10){
//     console.log('10 rs notes will be :' + Math.floor(amount/10));
//     amount = amount%10;
// }
// if(amount >9){
//     console.log('1 rs doller will be :' + amount);
// }