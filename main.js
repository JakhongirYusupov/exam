// 1-misol
let convert = (boolean) => boolean === true ? 'Yes' : 'No';

// console.log(convert(true));
// console.log(convert(false));


// 2-misol
let sumOfNegatives = (arr) => arr.reduce((acc, b) => {
    if (b < 0) acc += b
    return acc
}, 0)

// console.log(sumOfNegatives([4, -5, -10, 6]));


// 3-misol
let sumOfTwoArrays = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, b) => {
    return acc += b
}, 0)

// console.log(sumOfTwoArrays([4, -5, -10, 6], [6, 9, 14, -1, 6]));



// 4-misol
let fillThisArray = []
function generateAndSum(num) {
    for (let i = 1; i <= num; i++) fillThisArray.push(i)
    return fillThisArray.reduce((acc, b) => acc + b)
}

// console.log(generateAndSum(5));



// 5-misol
let removeStringSpaces = (str) => str.split(' ').join('')

// console.log(removeStringSpaces("Hel lo,  How a re you !"));



// 6-misol
function sumOfArrays(arr, positive = 0, negative = 0) {
    for (let i of arr) {
        if (i > 0) positive += 1
        else negative += i
    }
    return [positive, negative]
}

// console.log(sumOfArrays([4, 2, 10, -4, -3, 1, -4]));



// 7-misol
function firstBoolean(arr) {
    for (const iterator of arr) if (typeof iterator === 'boolean') return iterator
    return 'No boolean'
}

// console.log(firstBoolean(["hello", 45, -3, null, true, undefined, false, { age: 40 }]));