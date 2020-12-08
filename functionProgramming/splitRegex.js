function splitify(str) {
    return str.split(/[^a-z]/gi);
}
console.log(splitify("Hello World,I-am code"));