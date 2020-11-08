/*
Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement
Sometimes you may need to iterate through all the keys within an object. 
This requires a specific syntax in JavaScript called a for...in statement. 
For our users object, this could look like:

for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan

In this statement, we defined a variable user, and as you can see, 
this variable was reset during each iteration to each of the object's keys as the statement looped through 
the object, resulting in each user's name being printed to the console. 
NOTE: Objects do not maintain an ordering to stored keys like arrays do; 
thus a key's position on an object, or the relative order in which it appears, 
is irrelevant when referencing or accessing that key.

We've defined a function countOnline which accepts one argument (a users object). 
Use a for...in statement within this function to loop through the users object passed into the function 
and return the number of users whose online property is set to true. An example of a users object which 
could be passed to countOnline is shown below. Each user will have an online property with either
a true or false value.
*/

let users = {
    Alan: {
        online: true
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

for (const x in users) {
    let totalBinarySum = 0;
    totalBinarySum += users[x]['online'];
    //console.log(users[x]['online']);
    console.log(totalBinarySum);
}

function countOnline(usersObj) {
    let totalBinarySum = 0;
    for (const x in users) {
        if (users.hasOwnProperty(x)) {
            totalBinarySum += users[x]['online'];
            //console.log(users[x]['online']);
        }
    }
    return totalBinarySum;
}
console.log(countOnline(users));