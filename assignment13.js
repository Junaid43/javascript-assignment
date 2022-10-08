
const prompt = require('prompt-sync')();
var myinputarr = [];

var size = 100; // Array size
 
for(var a=0; a<size; a++) 
{  
    myinputarr[a] = prompt('Enter Person Name to invite ' + (a+1));
}

for (var i = 0; i < myinputarr.length; i++) {
    console.log(myinputarr[i] + "You are invited for dinner");

}




 
