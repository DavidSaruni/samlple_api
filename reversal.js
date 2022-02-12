//console.log("running....");
//const server = require('./zoomer/server.js');

let word = 'RADAR';
let word2 = 'SAD';

function reversal(string){
  let reversed = string.split('').reverse().join('');
   console.log(reversed);

    if(string == word){
      console.log('this is a palindrome');
    }else{
      console.log('not palindrome');
    }
}

reversal(word);
reversal(word2);

//question 2
//count the number of prime numbers less than anon-negaive number,n