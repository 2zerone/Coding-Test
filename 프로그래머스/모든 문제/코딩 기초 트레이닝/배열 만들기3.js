// Intuitive Code
const solution = (arr, intervals) => {
    const firstArr = arr.slice(intervals[0][0], intervals[0][1]+1);
    const secondArr = arr.slice(intervals[1][0], intervals[1][1]+1);
    return [...firstArr, ...secondArr];
}

// Summary Code (faltMap)
const solution2 = (arr, intervals) => {
    return intervals.flatMap(([a, b]) => arr.slice(a, b + 1));
}

// Summary Code (concat)
const solution3 = (arr, intervals) => {
    return arr.slice(intervals[0][0],intervals[0][1]+1).concat(arr.slice(intervals[1][0],intervals[1][1]+1))
}