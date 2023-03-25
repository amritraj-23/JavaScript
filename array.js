let arr = []

// for adding data in the array
arr.push(1,2,3,4,5)
// we can also push {}  and whole array [] add at last
arr.unshift(10)
//  unshift is similar to push but only difference is it only adds the data AT  FIRST  
console.log(arr);

arr.pop()
// for removing data from the array use ------- pop() this can only remove last element

// to get the length
console.log(arr.length);

const number = [1, 2, 3, 4, 5];
// the shift() method is used to remove the first element from an array and returns that removed element. 
const removedNumber = number.shift();
console.log(removedNumber); // Output: 1
console.log(number); // Output: [2, 3, 4, 5]



// The slice() method takes two arguments: the starting index and the ending index 
// of the portion of the array you want to slice. 
// The starting index is inclusive, while the ending index is exclusive. 
// If you omit the second argument, the slice() method will slice the array from the starting index 
// to the end of the array.

const fruits = ['apple', 'banana', 'orange', 'grapefruit', 'kiwi'];

const citrus = fruits.slice(2, 4);
// slice(0, -1)  -1 is  the last index of the array 
// if start point in slice is greater than last it will form emplty [] array

console.log(citrus); // Output: ['orange', 'grapefruit']
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grapefruit', 'kiwi']

// map fuction

let newArr = arr.map((val) => {
    return val*2;
})

console.log(newArr);

// filter
// filter() is used to create a new array with all the elements of an existing array 
// that pass a certain condition specified by a given function

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

// reduce

const num = [1, 2, 3, 4, 5];

const sum = num.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


// concat merges two or more arrays and returns a new array.
let arr1 = [1,2,3,4,5]
let arr2 = [5,6,7,8]
let arr3 = [12,13,14,15]
let res = arr1.concat(arr2,arr3)
console.log(res);

res.forEach((val)=> {
// console.log(val);
})

// indexof  return the index of the first value find

console.log(res.indexOf(12));
console.log(res.lastIndexOf(13));

// it will return the value
for(let data of res){
    // console.log(data);
}

// it will return the index 
for(let data in res){
    // console.log(data);
}


