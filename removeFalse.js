function bouncer(arr) {
    console.log(arr.filter(!(Boolean)));
    return arr;
}

let arr = [7, "ate", "", false, 9];
let arr2 = [false, null, 0, NaN, undefined, ""];
console.log(bouncer(arr2));
console.log("---------Second Array---------");
console.log(bouncer(arr));

