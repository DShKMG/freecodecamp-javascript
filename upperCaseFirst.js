function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function titleCase(str) {
    console.log(str.toLowerCase().split(' '));
    let newString = str.toLowerCase().split(' ');
    // Start capitalize only first letters
    for (let i = 0; i < newString.length; i++) {
        newString[i] = capitalizeFirstLetter(newString[i]);
    }
    // End capitalization of the first letters

    return newString.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
