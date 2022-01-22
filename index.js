const cats = [
    "Milo",
    "Otis",
    "Garfield"
];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    let copycats_1 = [...cats];
    copycats_1.push(name);
    return copycats_1;
}

function prependCat(name) {
    let copycats_2 = [...cats];
    copycats_2.unshift(name);
    return copycats_2
}

function removeLastCat(name) {
    let copycats_3 = [...cats];
    copycats_3.pop(name);
    return copycats_3;
}

function removeFirstCat(name) {
    let copycats_4 = [...cats];
    copycats_4.shift(name);
    return copycats_4;
}
