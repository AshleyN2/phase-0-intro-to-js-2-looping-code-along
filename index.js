// Code your solutions in this file
const names = ['Guadalupe', 'Ollie', 'Aki'];
const event = 'surprise';

function writeCards(){
    const customMessages = [];
    for (let j = 0; j < names.length; j++) {
        customMessages.push(`Thank you, ${names[j]}, for the wonderful surprise gift!`);
    }
    return customMessages;
}

function countDown(){
    let countDown = 11;
    while (countDown--)  {
        console.log(countDown);
    }
}