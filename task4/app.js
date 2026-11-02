const fs = require('fs');// module for file system operations
const path = require('path'); // module for handling and transforming file paths
const dirPath = path.join(__dirname, '/input');// 
let textOut = ''; // Initialize an empty string to hold the output text

for(let i = 1; i <= 10; i++) 
    {
        let textIn = fs.readFileSync(`${dirPath}/a${i}.txt`, 'utf-8');
        const arr = textIn.split('\r\n');

        textOut += `File a${i}.txt:\n`;
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
fs.writeFileSync(`${__dirname}/output.txt`, textOut);