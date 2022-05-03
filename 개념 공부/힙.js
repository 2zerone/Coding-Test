// 삽입
function insert(arr, data) {
    arr.push(data);
    let i = arr.length - 1;
    while(i > 0) {
        const up = Math.floor((i-1)/2);
        if(arr[up] > arr[i])
        break;

        // swap 함수 구현
    }
    return arr;
}