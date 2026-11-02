const fs = require('fs');// module for file system operations
const path = require('path'); // module for handling and transforming file paths
const dirPath = path.join(__dirname, '/input');// 
let textOut = ''; // Initialize an empty string to hold the output text

for(let i = 1; i <= 10; i++) 
    {
        let textIn = fs.readFileSync(`${dirPath}/a${i}.txt`, 'utf-8');
        const arr = textIn.split('\r\n');

        if(arr.length < i)
        {
            for(let j=0;j<arr.length;j++)
                textOut += `${arr[j]}\n`;
        }
        else
        {
            for(let j=0;j<i;j++)
                textOut += `${arr[j]}\n`;
        }
    }
fs.writeFileSync(`${dirPath}/output.txt`, textOut);










// fs.readdirSync(dirPath).forEach (file => {
//    // let i=1;
//  //fs.readFileSync(`${dirPath}/a${i}.txt`, 'utf-8')

// const textIn = fs.readFileSync(`${dirPath}/${file}`, 'utf-8');


// const lines = textIn.split('\r\n'); // Split the text into an array of lines

// textOut += `${textIn}\n`;// Append the text to the output string
// console.log(textOut);// Log the first line of the input text to the console
// //console.log(lines[i-1]);// Log the first line of the input text to the console
// })
fs.writeFileSync(`${dirPath}/output.txt`, textOut);// Write the new string to a file named 'output.txt' in the same directory