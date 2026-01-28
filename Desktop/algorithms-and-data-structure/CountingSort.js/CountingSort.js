function countingSort(arr) {
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);

    for (let num of arr) {
        count[num]++;
    }

    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[index] = i;
            index++;
            count[i]--;
        }
    }

    return arr;
}