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
// let arr = [90, 26, 9, 72, 12];
// let max = Math.max(arr[0], arr[1]);
// let smax = Math.min(arr[0], arr[1]);

// for (let i =2; i<arr.length; i++){
//     if (arr[i]>max){
//         smax=max;
//         max= arr[i]
//     } else if (arr[i]>smax){
//         smax=arr[i]
//     }
// }
// console.log(smax);


// 33] 
// let arr =  [10,20, 30, 40, 50];
// let i = 0, j= arr.length- 1;

// while (i != j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++
//     j--
// }
// console.log(arr);


// 34] 
// let arr = [0,1,0,1,0,0,1];
// let i = 0, j = 0;

// while (i!=arr.length){
//     if (arr[i]==0){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++
//     }
//     i++
// }
// console.log(arr);
