function booWho(bool) {
    console.log(typeof bool)
    if (typeof bool == Boolean) {
        return true;
    }
    return false;
}

console.log(booWho(true));