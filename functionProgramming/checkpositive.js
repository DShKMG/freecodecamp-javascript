function checkPositive(arr) {
    return arr.every(
        i => i > 0
    );
}
function checkExistPositive(arr) {
    return arr.some(
        i => i > 0
    );
}
console.log(checkPositive([1, 2, 3, -4, 5]));
console.log(checkExistPositive([1, 2, 3, -4, 5]));