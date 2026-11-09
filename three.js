//israa lafi
//jawad ballan
const numbers = [0, 5, 0, 3, -1, 0, 8, 0];//create an array of numbers
let counter = 0;//add a counter variable to count the number of 0 in the array
for(let i=0; i<numbers.length; i++)//scan the array using a for loop
{
    let isZero = numbers[i] === 0;//check if the current number is 0
    counter = counter + Number(isZero);//if it is 0, add 1 to the counter
}
console.log("number of 0 in array: " + counter);//print the number of 0 in the array


