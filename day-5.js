// 29]
// let arr = new Array(5);
// for (let i=0; i<arr.length;i++){
//     arr[i] = Number(prompt("enter a num"))
// }
// console.log(arr);

// 30]
// let arr = [10,20,30,40,50];
// let sum = 0;
// for (let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);


// 31] 
// let arr = [10,20,300,40,50];
// let max = arr[0];
// for (let i = 1; i<arr.length; i++){
//     if(max < arr[i] ){  // use max < arr[i] to find minimum
//         max = arr[i]
//     }
// }
// console.log(max);


// 32 ]
let arr = [90, 26, 9, 72, 12];
let max = Math.max(arr[0], arr[1]);
let smax = Math.min(arr[0], arr[1]);

for (let i =2; i<arr.length; i++){
    if (arr[i]>max){
        smax=max;
        max= arr[i]
    } else if (arr[i]>smax){
        smax=arr[i]
    }
}
console.log(smax);
