
    const prompt = require('prompt-sync')();
   let n1 = prompt('Enter First Number');
   let n2 = prompt('Enter Second Number');

var regp = /[^0-9.-]+/g;

console.log(parseFloat(n1.replace(regp, '')) +       parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) -         parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) *         parseFloat(n2.replace(regp, '')));

console.log(parseFloat(n1.replace(regp, '')) /         parseFloat(n2.replace(regp, '')));

