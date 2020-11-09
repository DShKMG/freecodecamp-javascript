/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    //console.log(str.split(' ')[0].length);
    let strArray = str.split(' ');
    let strArrayLength = [];
    for (const i in strArray) {
        //console.log(strArray[i] + " : " + strArray[i].length);
        strArrayLength.push(strArray[i].length);
    }
    //console.log("Whole Array :" + strArrayLength);
    console.log(Math.max(...strArrayLength));
    return Math.max(...strArrayLength);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
