### LeetCode：两数之和

#### 题目描述
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。


#### 一、暴力查找法

##### （一）实现思路

通过对数组的两层循环，搜索所有可能的组合，找到符合描述的组合后，返回他们的下标。

##### （二）实现代码

``` JavaScript
/**
 * @desc  暴力查找法：两层循环搜索
 * @param {Array<Number>} arr
 * @param {Array<Number>} target
 */
function twoSum (arr, target) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}
```


##### （三）复杂度分析

+ 时间复杂度：O(n^2)。要对每个元素遍历的同时（这将花费 O(n) 的时间），还要遍历这个元素之后的其他元素（这也将花费 O(n) 的时间）。

+ 空间复杂度：O(1)。未申请额外的内存空间。


#### 二、两遍哈希法

> 通过暴力查找法实现固然简单，但是 O(n^2) 的时间复杂度，还有一定的优化空间。

##### （一）实现思路

将暴力查找法中内层循环查找元素的过程，用哈希表查找元素替代。

由于哈希表查找元素 O(1) 时间复杂度的特性，优化后的算法能有效降低时间复杂度。

##### （二）实现代码

+ 通用版本

``` JavaScript
/**
 * @desc  两遍哈希法：空间换时间
 * @param {Array<Number>} arr
 * @param {Array<Number>} target
 */
function twoSum (arr, target) {
    let len = arr.length;

    // 开辟额外的空间，用于存储 { 数组值: 下标 }
    let map = {};
    for (let i = 0; i < len; i++) {
        map[arr[i]] = i;
    }

    for (let i = 0; i < len; i++) {
        let j = map[target - arr[i]];

        if (j !== undefined && j !== i) {
            return [i, j];
        }
    }

    return [-1, -1];
}
```

+ JavaScript 优化版本

``` JavaScript
/**
 * @desc  两遍哈希法：空间换时间。
 * @param {Array<Number>}  arr
 * @param {Array<Number>} target
 */
 function twoSum (arr, target) {
     let len = arr.length;

     for (let i = 0; i < len; i++) {
         // Array.indexOf 方法，可优化代码结构。
         let j = arr.indexOf(target - arr[i]);

         if (j !== -1 && j !== i) {
             return [i, j];
         }
     }

     return [-1, -1];
 }
```

##### （三）复杂度分析

+ 时间复杂度：O(n)。用哈希表查找元素，直接替代了暴力法中的内存循环后，只一层循环遍历数组即可（这将花费 O(n) 的时间）。

+ 空间复杂度：O(n)。额外申请了内存空间，用于存储 n 个元素。

#### 三、一遍哈希法

##### （一）实现思路

两遍哈希法，虽然使用了哈希法查找元素，但是迭代了两次哈希表，第一次存储、第二次查找。

我们可以将存储 { 数组元素: 下标 } 的过程，和查找 “两数之和” 的过程合并起来，减少一次对哈希表的迭代。

##### （二）实现代码

``` JavaScript
/**
 * @desc  一遍哈希法：空间换时间
 * @param {Array<Number>}  arr
 * @param {Array<Number>} target
 */
function twoSum (arr, target) {
    let map = {};
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let current = arr[i];

        if (typeof map[target - current] === "number") {
            return [map[target - current], i];
        }

        map[current] = i;
    }

    return [-1, -1];
}
```

##### （三）复杂度分析

+ 时间复杂度：O(n)。遍历 n 个元素的数组，使用每个元素进行 O(1) 时间的查找。
+ 空间复杂度：O(n)。额外申请了内存空间，用于存储 n 个元素。


> 本文采用 JavaScript 作为实现语言。
