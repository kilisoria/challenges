const arr = [3, 2, 1, 4, 6, 5, 7, 9, 8, 10]


const insertionSort = arr => {
    let currentVal
    
    for (let i = 0; i < arr.length; i++) {
        currentVal = arr[i]

        for (var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        
        arr[j+1] = currentVal
    }
    
    return arr
}

insertionSort(arr);
// console.log(arr); // [1,2,3,4,5,6,7,8,9,10]

const arr2 = [3, 2, 1, 4, 6, 5, 7, 9, 8, 10];
const insertionSortMethod = arr2 => {
    let currentVal;
    
    for (let i = 0; i < arr2.length; i++) {
        currentVal = arr2[i];


        console.log('index i= ', i);
        console.log('current Value', currentVal);

        for (var j = i - 1; j >= 0 && arr2[j] > currentVal; j--) {
            console.log('j', j);
            console.log('currentVal', currentVal);

            arr2[j+1] = arr2[j]
        }
        
        arr2[j+1] = currentVal
    }
    
    return arr2
}

insertionSortMethod(arr2);
console.log(arr2) // [1,2,3,4,5,6,7,8,9,10]