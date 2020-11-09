function sumAll(total, x) {
    return total + x;
}

function largestOfFour(arr) {
    /*arr.forEach((x, y, z) => {
        x.forEach((j) => {
            console.log(j);
        });

    });*/
    let sumArr = []
    arr.forEach(x => {
        sumArr.push(Math.max(...x));
    });
    console.log(sumArr);
    return sumArr;
}

function largestOfFourSumCombined(arr) {
    let sumArr = []
    arr.forEach(x => {
        sumArr.push(x.reduce((total, x) => {
            return total + x;
        }
        ));
    });
    return Math.max(...sumArr);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
let a = largestOfFourSumCombined([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//console.log(a);