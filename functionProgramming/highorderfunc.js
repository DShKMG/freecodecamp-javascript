const squareList = arr => {
    arr = arr.filter(types => Number.isInteger(types)).filter(
        typl => typl > 0
    ).map(
        (x) => {
            return (x * x);
        }
    )
    return arr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
let newArr = [-3, 4.8, 5, 3, -3.2];


newArr = newArr.filter(types => Number.isInteger(types)).filter(
    typl => typl > 0
).map(
    (x) => {
        return (x * x);
    }
)

console.log(newArr)

//map(), filter(), reduce()