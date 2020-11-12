function getIndexToIns(arr, num) {
    arr.sort();
    let indexBelongs = 0;
    for (let i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            indexBelongs++;
        }
    }
    return indexBelongs;
}

console.log(getIndexToIns([40, 60], 50));
