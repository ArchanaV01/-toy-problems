function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            count++
        }
    }
    return count;
}

function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++
        }
    }
    return count;
}

const countB = function(str) { //var, let can also be used
    return countChar(str, "B")
}

// function countB(str) {
//     return countChar(str, "B")
// }

console.log(countBs("BBBadsb"))

console.log(countChar("BBBadsb", "s"))


console.log(countB("BBBadsb"))