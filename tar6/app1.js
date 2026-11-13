//israa lafi
//jawad ballan
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'input');

// Read all 3 files and store them in an array
const files = [
  fs.readFileSync(path.join(dirPath, 'a1.txt'), 'utf-8').split('\r\n'),
  fs.readFileSync(path.join(dirPath, 'a2.txt'), 'utf-8').split('\r\n'),
  fs.readFileSync(path.join(dirPath, 'a3.txt'), 'utf-8').split('\r\n'),
];

let textOut = ''; // Initialize an empty string to hold the output text
let place = 0;    // Tracks the current starting index
let numLine = 1;  // Tracks how many lines to copy in the current round

// Keep looping as long as at least one file still has unread lines
while (place < files[0].length || place < files[1].length || place < files[2].length) {
  
  // Loop through each of the 3 files
  for (let i = 0; i < files.length; i++) {
    
    // Copy 'numLine' lines starting from 'place'
    for (let j = 0; j < numLine; j++) {
      const currentIndex = place + j;
      
      // Only add to textOut if the line exists in the current file
      if (currentIndex < files[i].length) {
        textOut += `${files[i][currentIndex]}\n`;
      }
    }
  }

  // Move the starting position forward and increase the batch size
  place += numLine;
  numLine++;
}

// Write the final string to output.txt
fs.writeFileSync(`${__dirname}/output11.txt`, textOut);
console.log('Done! Files merged into output11.txt');
