function confirmEnding(str, target) {
    console.log(str.substr(str.length - target.length));
    ourSubStr = str.substr(str.length - target.length);
    if (ourSubStr == target) {
        return true;
    }
    return false;
}

console.log(confirmEnding("Bastian", "n"));
// Can be also done with .endWith() command here is an example below

function checkEnd(str, target) {
    return str.endsWith(target);
}

console.log(checkEnd("Bastian", "n"));