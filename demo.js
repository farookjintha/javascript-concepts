// const readline = require('readline');
// const inp = readline.createInterface({
//   input: process.stdin
// });
// const userInput = [];
// inp.on("line", (data) => {
//  userInput.push(data);
// });
// inp.on("close", () => {
//  console.log('User Input: ', userInput)
//  inp.close();
// });

const readline = require('readline');
 const inp = readline.createInterface({ input: process.stdin });
  const userInput = []; 
  inp.on("line", (data) => { userInput.push(data); }); 
  inp.on("close", () => { 
      var num = userInput[0].split(""); 
  for (i = 0; i < num.length; i++) { 
      console.log(num[i]);
 }
 });