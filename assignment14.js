
const prompt = require('prompt-sync')();
var myinputarr = [];
let new_member = false ;

var size = prompt('Enter Person to invite '); 

 
for(var a=0; a<size; a++) 
{  
    myinputarr[a] = prompt('Enter Person Name to invite ' + (a+1));
}

myinputarr.push('Asif')

for (var i = 0; i < myinputarr.length; i++) {
    console.log(myinputarr[i] + "You are invited for dinner");
    
}







 
