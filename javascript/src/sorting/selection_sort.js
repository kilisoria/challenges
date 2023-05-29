const arr = [3,2,1,4,6,5,7,9,10,8]

const selectionSort = arr => {   
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j
            }
        }

        if (i !== lowest) {
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
}

selectionSort(arr);
console.log(arr); // [1,2,3,4,5,6,7,8,9,10]

const list = [3,2,1,4,6,5,7,9,10,8]
const selectionSortMethod = list => {
    for (let i = 0; i < list.length; i++) {
        let lowestIndex = i;
        const lowest = list[lowestIndex];
        
        for (let j = i + 1; j < list.length; j++) {
            const comparation = list[j];

            if (comparation < lowest) {
                lowestIndex = j;
            }
        }

        if (i !== lowestIndex) {
            const tempValue = list[i];
            
            // swapping
            list[i] = list[lowestIndex];
            list[lowestIndex] = tempValue;
        }
    }

    return list;
}

selectionSortMethod(list);
console.log(list); // [1,2,3,4,5,6,7,8,9,10]