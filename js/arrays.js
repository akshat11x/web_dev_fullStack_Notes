// let arr = [1,2,5,4,7];
// console.log(arr);

// // Insertion at Beginning of Array
// arr.unshift(10);
// console.log(arr);


// // Insertion at End of Array 
// arr.push(8);
// console.log(arr);


// // Insertion at Middle 
// arr.splice(3,0,100);
// console.log(arr);

// // Searching  On Arrays
// let Array = [1, 2, 5, 4, 7];
// console.log(arr);

// console.log(Array.indexOf(5)); //2
// console.log(Array.indexOf(50)); //-1

// console.log(Array.includes(5)); //true
// console.log(Array.includes(50)); //false

// // Searching on Objects 
// let objArray = [
//     {
//         No : 1,
//         Name : 'Priyansh'
//     }
//     ,
//     {
//         No : 2,
//         Name : 'Prish'
//     }
// ]

// console.log(objArray); 

// console.log(objArray.includes({No:1,Name:"Priyansh "})); //present but false

// // For this we use callback function 
// let b=objArray.find((obj) => obj.Name === "Priyansh");
// console.log(b);

// slicinng of arrays
let arr = [1,2,3,4,5,6];
console.log(arr);


let newArray = arr.slice();
console.log(newArray);

newArray = arr.slice(0, -1);
console.log(newArray);

newArray = arr.slice(2,5);
console.log(newArray);