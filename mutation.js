function mutation(arr) {
    let firstArr = arr[0].toLowerCase();
    let secondArr = arr[1].toLowerCase();
    for (let i = 0; i < secondArr.length; i++) {
        if (firstArr.indexOf(secondArr[i]) == -1) {
            console.log("Faulty char : " + secondArr[i]);
            return false;
        }

    }
    return true;
}


mutation(["hello", "hEy"]);