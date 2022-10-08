

const prompt = require('prompt-sync')();
let myinputarr = [];

let size = prompt('Enter Person to invite '); 
 
for(var a=0; a<size; a++) 
{  
    myinputarr[a] = prompt('Enter Person Name to invite ' + (a+1));
    console.log('\n');
}


for (var i = 0; i < myinputarr.length; i++) {
    console.log(myinputarr[i] + "You are inital invitation for dinner \n");
}


console.log('you found a bigger dinner table');

let newarr = [];

let newsize = prompt('Enter More Person to invite '); 

for(var a=0; a<newsize; a++) 
{  
    newarr[a] = prompt('Enter Person Name to invite ' + (a+1));
}

for (var i = 0; i < newarr.length; i++) {
    console.log(newarr[i] + " New Member who are invitated for dinner \n");
}


const middleindex = ((myinputarr.length - 1) + (myinputarr.length+1))/2

myinputarr.unshift(myinputarr.length-1, newarr[0]);

myinputarr.push(newarr[2]);

myinputarr.splice(middleindex, newarr[1]);

console.log("After adding member new invitation" + myinputarr);






 











 
