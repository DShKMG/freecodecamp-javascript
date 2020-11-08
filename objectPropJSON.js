/*
Basic Data Structures: Check if an Object has a Property
Now we can add, modify, and remove keys from objects. 
But what if we just wanted to know if an object has a specific property? 
JavaScript provides us with two different ways to do this. 
One uses the hasOwnProperty() method and the other uses the in keyword. 
If we have an object users with a property of Alan, we could check for its presence 
in either of the following ways:

users.hasOwnProperty('Alan');
'Alan' in users;
// both return true

We've created an object, users, with some users in it and a function isEveryoneHere, 
which we pass the users object to as an argument. 
Finish writing this function so that it returns true only if the users object contains all four names
Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.
*/

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

let globalKeyWords = ['Alan', 'Jeff', 'Sarah', 'Ryan'];

function realSolution(obj) {
    let totalVar = 0;
    for (let i = 0; i < globalKeyWords.length; i++) {
        totalVar += users.hasOwnProperty(globalKeyWords[i]);
    }
    if (totalVar == 4) {
        return true;
    } else {
        return false;
    }
}

realSolution(users);


function isEveryoneHere(obj) {
    for (let i = 0; i < globalKeyWords.length; i++) {
        if (!(users.hasOwnProperty(globalKeyWords[i]))) {
            return false;
        }
    }
}

console.log(isEveryoneHere(users));
