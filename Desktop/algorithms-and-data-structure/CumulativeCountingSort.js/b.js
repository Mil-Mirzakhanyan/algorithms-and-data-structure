function BubbleSort(arr) {
    for(let i = 0; i <arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;


                
            }
        }
    }
    return arr;
}

function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;

}

function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let privot = arr[0];
    let left = [];
    let right = [];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < privot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
            
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}


functionbinarySearch(arr, target) {
    loet left = 0;
    let right = arr.length -1;
    while(;eft <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
            
        } else {
            right = mid - 1;

        }
    }
    return -1;
}