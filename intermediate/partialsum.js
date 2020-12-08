function sumAll(arr) {
    let totalSum = 0
    let maxVal = 0;
    let minVal = 0;
    if (arr[1] > arr[0]) {
        maxVal = arr[1] + 1;
        minVal = arr[0];
    } else {
        maxVal = arr[0] + 1;
        minVal = arr[1];
    }
    for (let i = minVal; i < maxVal; i++) {
        totalSum += i;
    }
    return totalSum;
}

sumAll([1, 4]);
arr = [1, 4];

console.log(totalSum);