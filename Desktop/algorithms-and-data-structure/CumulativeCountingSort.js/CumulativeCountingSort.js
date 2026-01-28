function cumulativeCountingSort(arr) {
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);
    let output = new Array(arr.length);

    for (let num of arr) {
        count[num]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        let num = arr[i];
        output[count[num] - 1] = num;
        count[num]--;
    }

    return output;
}