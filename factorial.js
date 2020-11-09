function factorialize(x) {
    if (x < 1) {
        if (x == 0) {
            return 1;
        } else {
            return -1;
        }
    }
    else {
        return (x * factorialize(x - 1));
    }

}

//factorialize(5);
console.log(factorialize(5))