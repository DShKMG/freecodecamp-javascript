function urlSlug(title) {
    title = title.toLowerCase();
    let titleArr = title.split(" ").join("-");;
    return titleArr;
}

urlSlug("Winter is coming")
let thisStr = " Winter Is  Coming";

console.log(thisStr.length);

thisStr = thisStr.toLowerCase().trim(/([A-Z])\w/ig);
console.log(thisStr)
let thisArr = thisStr.split(/^(a-z)/ig)
console.log(thisArr)

