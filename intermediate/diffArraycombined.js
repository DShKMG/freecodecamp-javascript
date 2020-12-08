function diffArray(arr1, arr2) {
  let retArr = Array.from(new Set(arr1.concat(arr2)));
  retArr.sort()
  return retArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
