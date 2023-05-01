const myArray = [];
let count = 1;

function addNextNumber() {
    myArray.push(count);
    count++;
    document.getElementById("result").innerHTML = `${myArray.join(" + ")} = ${addition()}`;
}

function addition() {
    let result = 0;
    for (let i = 0; i <= myArray.length; i++) {
        result += myArray[i];
    }
    return result;
}
