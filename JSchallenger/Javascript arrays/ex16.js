function myFunction(array, n) {
    if (array.length < n) {
        return array
    } else {
        for (var i=0; i<array.length; i++) {
            while (array.length > n) {
                array.splice(i, 1)
            }
        }
        return array
    }  
}
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3))

// other solution:
// function myFunction(arr, n) {
//     return arr.slice(-n);
//  }