function repeatStringNumTimes(str, num) {
    let returnedStr = "";
    for (let i = 0; i < num; i++) {
        returnedStr += str;
    }
    console.log(returnedStr);
}


repeatStringNumTimes("abc", 3);
