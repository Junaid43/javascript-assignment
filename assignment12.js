
const prompt = require('prompt-sync')();
var myinputarr = [];

var size = 100; // Array size
 
for(var a=0; a<size; a++) 
{  
    myinputarr[a] = prompt('Enter about your favourite mode of transportation ' + (a+1));
}

for (var i = 0; i < myinputarr.length; i++) {
    console.log(myinputarr[i]);
}




 
