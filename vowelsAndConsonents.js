function vowelsAndConsonants(s) {
    [...s].forEach(element => {
        if ('aeiou'.includes(element)) {
            console.log(element);
        }
        else {
            null;
        }
        [...s].forEach(element => {
            if ('aeiou'.includes(element)) {
                null;
            }
            else {
                console.log(element);
            }
        });
    }


function main() {
            const s = "javascriptloops";

            vowelsAndConsonants(s);
        }

