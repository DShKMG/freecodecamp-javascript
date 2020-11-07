function spreadOut() {
    let fragment = ['to', 'code'];
    fragment.splice(0, 0, 'learning'); // Splice will replace
    fragment.splice(3, 0, 'is', 'fun'); // slice will export
    //console.log(fragment);
    let sentence; // Change this line
    return fragment;
}

console.log(spreadOut());

let spreadTwo = () => {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}

console.log(spreadTwo());
