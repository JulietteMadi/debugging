const myArray = [1, 2, 3, 4, 5];
let result = 0

for (let i = 0; i <= myArray.length; i++) {
    result += myArray[i]
}

document.getElementById("result").innerHTML = result;