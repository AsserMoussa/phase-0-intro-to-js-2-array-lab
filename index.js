// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const newcat = cats.slice();
    newcat.push(name);
    return newcat;
}

function prependCat(name){
    const newcat = cats.slice();
    newcat.unshift(name);
    return newcat;
}

function removeLastCat(){
    const newcat = cats.slice();
    newcat.pop();
    return newcat;
}

function removeFirstCat(){
    const newcat = cats.slice();
    newcat.shift();
    return newcat;
}