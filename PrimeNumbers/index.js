const result = document.getElementById("result");

function findPrimeNumbers() {
    const myNumbers = document.getElementById("myNumbers").value.split(" ");
    const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];

    let count = 0;
    let myPrimeNumbers = [];

    for (let i = 0; i < myNumbers.length; i++) {
        for (let j = 0; j < primeNumbers.length; j++) {
            if (myNumbers[i] === primeNumbers[j]) {
                count++;
                myPrimeNumbers.push(myNumbers[i]);
            }
        }
    }

    if (count === 0) {
        result.innerHTML = "There is no prime numbers";
    } else {
        result.innerHTML =
            "There is " +
            count +
            " prime numbers : " +
            myPrimeNumbers.join(", ");
    }
}