function destroyer(arr) {
    console.log([...arr])
    for (let i = 1; i < arguments.length; i++) {
        let index = arr.indexOf(arguments[i]);
        console.log(index)
        while (index > -1) {
            arr.splice(index, 1);
            index = arr.indexOf(arguments[i]);
        }
    }
    console.log(arr);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
