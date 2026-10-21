const arr=[0,1,8,0,6,0,7,0];
let count=0;

for(let i=0;i<arr.length;i++)
    (arr[i]===0)?count++:count;

console.log(count);