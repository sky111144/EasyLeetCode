/**
 * @desc  暴力法：二层循环遍历
 * @param {Array<Number>}  arr
 * @param {Number} target
 */
function twoSum1(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

/**
 * @desc  两遍哈希：空间换时间
 * @param {Array<Number>}  arr
 * @param {Array<Number>} target
 */
function twoSum2_1(arr, target) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++) {
        let j = map[target - arr[i]];

        if (j !== undefined && j !== i) {
            return [i, j];
        }
    }

    return [-1, -1];
}

/**
 * @desc  两遍哈希：空间换时间。利用 JavaScript Array.indexOf 方法，优化代码结构。
 * @param {Array<Number>}  arr
 * @param {Array<Number>} target
 */
 function twoSum2_2(arr, target) {
     for (let i = 0; i < arr.length; i++) {
         let j = arr.indexOf(target - arr[i]);

         if (j !== -1 && j !== i) {
             return [i, j];
         }
     }

     return [-1, -1];
 }



/**
 * @desc  一遍哈希：空间换时间
 * @param {Array<Number>}  arr
 * @param {Array<Number>} target
 */
function twoSum3(arr, target) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        if (typeof map[target - current] === "number") {
            return [map[target - current], i];
        }

        map[current] = i;
    }

    return [-1, -1];
}


console.log(twoSum1([2, 2, 7, 11, 11, 15], 9));
console.log(twoSum2_1([2, 7, 11, 15], 9));
console.log(twoSum2_2([2, 7, 11, 15], 9));
console.log(twoSum3([2, 7, 11, 15], 9));
