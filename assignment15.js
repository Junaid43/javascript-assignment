

const prompt = require('prompt-sync')();
let myinputarr = [];

let size = prompt('Enter Person to invite '); 

let new_member = false ;


 
for(var a=0; a<size; a++) 
{  
    myinputarr[a] = prompt('Enter Person Name to invite ' + (a+1));
    console.log('\n');
}


for (var i = 0; i < myinputarr.length; i++) {
    console.log(myinputarr[i] + "You are inital invitation for dinner \n");
}




let index = prompt('Enter the value of index of the person who are missing from dinner'); 

myinputarr.splice(index, 1);

myinputarr.push('Asif');



for (var i = 0; i < myinputarr.length; i++) {
    console.log(myinputarr[i] + " \t After one person is missing you are invitated for dinner \n");
    
}








 
