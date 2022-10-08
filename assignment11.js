
const prompt = require('prompt-sync')();
var myinputarr = [];

var messageval = [];
var size = 2; // Array size
 
for(var a=0; a<size; a++) 
{  
    myinputarr[a] = prompt('Enter array Element' + (a+1));
}

for(var b=0; b<size; b++) 
{  
    messageval[b] = prompt('Enter Message' + (b+1));
}


for (var i = 0; i < myinputarr.length; i++) {
    console.log(myinputarr[i]);

    console.log(messageval[i]);
}




 
