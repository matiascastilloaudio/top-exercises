function sumRange(num) {
    if (num == 1) {
        return 1;
    } else {
        return num + sumRange(num - 1);
    }
}

console.log(sumRange(3)); //6

function power(bas, exp) {
    if (exp == 0) {
        return 1;
    } else {
        return bas * power(bas, exp - 1);
    }
}

console.log(power(2, 4)); //16

function fact(num) {
    if (num == 1) {
        return 1;
    } else {
        return num * fact(num - 1);
    }
}

console.log(fact(5)); //120

// function all(arr, call) {
//     if (call(arr)) {
//         return true;
//     } else {
//         return 
//     }
// } ????

function productOfArray(arr) {
    if (arr.length == 0) {
        return 1;
    } else {
        let i = 0;
        return arr.shift() * productOfArray(arr);
    }
}

console.log(productOfArray([1, 2, 3])) // 6

function contains(obj, val) {
    
}