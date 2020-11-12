function chunkArrayInGroups(arr, size) {
    let returnedArr = [];
    while (arr.length > size) {
        returnedArr.push(arr.splice(0, size));
        console.log(returnedArr);
    }
    console.log(arr);
    if (arr.length <= size && arr.length > 0) {
        console.log("Array length : " + arr.length);
        console.log(arr);
        returnedArr.push(arr);
        console.log(returnedArr);
    }

    return returnedArr;
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
/*
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

for (let i = 0; i < animals.length; i++) {
    console.log(animals.splice(0, 2));
}
console.log(animals);*/
//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));