/*
Basic Data Structures: Iterate Through All an Array's Items Using For Loops
Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or 
more elements that we might need, or to manipulate an array based on which data items meet a certain set of 
criteria. JavaScript offers several built in methods that each iterate over arrays in slightly different ways to
achieve different results (such as every(), forEach(), map(), etc.), 
however the technique which is most flexible and offers us the greatest amount of control is a simple for loop.

Consider the following:

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// returns [12, 14, 80]
Using a for loop, this function iterates through and accesses each element of the array, 
and subjects it to a simple test that we have created. In this way, 
we have easily and programmatically determined which data items are greater than 10, 
and returned a new array containing those items.

We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, 
and returns a new array. elem represents an element that may or 
may not be present on one or more of the arrays nested within arr. 
Modify the function, using a for loop, to return a filtered version of the passed array such that 
any array nested within arr containing elem has been removed.

*/

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i].indexOf(elem))
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));



/*
function filteredArray(arr, elem) {
    let newArr = arr;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            console.log(arr[i][j])
            if (arr[i][j] == elem) {
                arr[i].splice(j, 1,);
            }
        }
    }
    return arr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

let newestArr = [[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]];
newestArr[0].splice(0,1,);
console.log(newestArr)
*/

/*
For two general problem

If we have a 2 participants and 1 server which gives an key to each participants after the messages such as

Gen 1 has chest which contains 2 attack note in it
Gen 2 has chest which also contains 2 attack note in it

There is a 3rd party commander in the middle which decides everything. When a message is passed to him he waits
for both General's response. When he has both response he gives them key to open their chest.
When they open, they will send one copy to 3rd commander to show that they got the message.

As soon as he receives one of the message he waits certain amount of time for another one to arrive. If does
not arrive in the given time, he will cancel the attack order.

We can think of it as 2 clients such as user and market and there is a server.

When user orders something it does not process immediately. It sends request to server and
server use this request to send to the market. Market returns confirmation saying that it receives the order.
Order is suspended and waiting for user confirmation. Server sends exact copy of the order to both clients
to confirm whether they got the same thing. When they both returns true, server will handle them "key" to process
their data furthermore such as order confirmation etc with a delay!

This delay is because of server ask them one more time for confirmation and if they respond in a given time limit
they will confirm. If not server will send terminate signal to both processes on the clients.

*/