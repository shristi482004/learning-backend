const fs=require('fs');
fs.appendFile("hi.txt","Yay!",(err)=>{
    if(err) console.error(err);
    else console.log("File written successfully");
});
fs.readFile("hi.txt","utf-8",(err,data)=>{
    if(err) console.error(err);
    else console.log(data);
})

const { access, constants } = require('fs');

const file = 'package.json';

// Check if the file exists in the current directory.
access(file, constants.F_OK, (err) => {
  console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
});

// Check if the file is readable.
access(file, constants.R_OK, (err) => {
  console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
});

// Check if the file is writable.
access(file, constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
});

// Check if the file is readable and writable.
access(file, constants.R_OK | constants.W_OK, (err) => {
  console.log(`${file} ${err ? 'is not' : 'is'} readable and writable`);
});
