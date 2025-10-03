// 1. sum of 2 intergers;

let a = 10;
let b = 20;
console.log(a+b);


// 2. Swap 2 variables 
a] using extra variable
let a = 10;
let b = 5;
let c;

c = a;
a = b;
b = c;
console.log(a);
console.log(b);

// b] using mathematics
let a = 10;
let b = 20;
a = a + b; //a =30
b = a - b;  //b = 10
a = a - b;  //a=10
console.log(a, b);

// c] destructing using Array
let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(a,b);

// 3] 
let i = 11;
i = i++ + ++i;
console.log(i);

// 4]
let a = 11, b= 22;
let c = a + b + a++ + b++ + ++a+ ++b;
console.log(c);

// 5]
let b = true;
b++;
console.log(b);

// 6]
let a = 11++;
console.log(a);
// it will be throwing an errror

// 7] to create an otp
console.log(Math.floor(Math.random()*9000+1000));

//8] to calc area and peri of rectangle
let a = 2;
let b = 3;
console.log(a*b); //area = length into weadth
console.log(` the perimeter of rectangle ${(a*b)*2}`)  // peri = (a*b)*2


// 9] area of triangle by  herons formula
// the formula is A = √(s(s-a)(s-b)(s-c)),
let a = 5;
let b = 4;
let c = 3;
let s = (a+b+c)/2
console.log(s);
console.log(Math.sqrt(s / (s-a) * (s-b) * (s-c)));
