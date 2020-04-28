function deepEqual(first, second) {
    if (typeof first === typeof second) {
        if (typeof first === 'object') {
            const f_keys = Object.keys(first)
            const s_keys = Object.keys(second)
            if (f_keys.length === s_keys.length) {
                for (let i = 0; i < f_keys.length; i++) {
                    const element = f_keys[i]
                    if (deepEqual(first[element], second[element]) === false) {
                        return false
                    }
                }
                return true
            } else {
                return false
            }

        } else {
            return first === second
        }
    } else {
        return false
    }
}


var archana = {
    last_name: "Vellanki",
    age: 24
};

var Archu = {
    last_name: "Vellanki",
    age: 24
};

var bhuvana = {
    last_name: "Vellanki",
    age: 27
};

const a = 2
var b = 2
console.log(typeof(a), typeof(b));

console.log(deepEqual(a, b));


// Output: false
console.log(deepEqual(bhuvana, archana));
// Output: true
console.log(deepEqual(Archu, archana));