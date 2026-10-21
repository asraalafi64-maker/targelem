//israa lafi
//jawad ballan
const numbers = [0, 5, 0, 3, -1, 0, 8, 0];
let counter = 0;
for(let i=0; i<numbers.length; i++)
{
    let isZero = numbers[i] === 0;
    counter = counter + Number(isZero);
}
console.log("number of 0 in array: " + counter);


