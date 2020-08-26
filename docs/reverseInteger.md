### LeetCode：整数反转

#### 题目描述

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

注意：如果反转后，整数溢出那么就返回 0。

#### 一、求余反转法

##### （一）实现思路

根据十进制数的数学定义，用求余运算取原整数的低位，也就是反转后的高位，从高位到低位构造出反转后的整数。

##### （二）实现代码

``` JavaScript
/**
 * @param  {number} x
 * @return {number}
 */
function reverseInteger (x) {
    const MIN_RANGE = Math.pow(-2, 31);
    const MAX_RANGE = Math.pow(2, 31) - 1;

    let n = 0;

    while (x) {
        n = n * 10 + x % 10;
        x = parseInt(x/10);
    }

    return n >= MIN_RANGE && n <= MAX_RANGE ? n : 0;
};
```

##### （三）复杂度分析

+ 时间复杂度：O(logn)。整数位数决定了时间复杂度，整数位数是整数字面量的对数。
+ 空间复杂度：O(1)。没有使用额外的空间。

#### 二、数组反转法

##### （一）实现思路

1、将整数转化为字符串，再将字符串转化为数组，反转数组。

2、反转数组后，再将数组转化为字符串，再将字符串转化为整数。

##### （二）实现代码

``` JavaScript
/**
 * @param  {number} x
 * @return {number}
 */
function reverseInteger (x) {
    const MIN_RANGE = Math.pow(-2, 31);
    const MAX_RANGE = Math.pow(2, 31) - 1;

    let symbol = x >= 0 ? 1 : -1;
    let result = x.toString().split("").filter(bit => bit !== "-");

    result.reverse();

    result = parseInt(result.join("")) * symbol;

    return result >= MIN_RANGE && result <= MAX_RANGE ? result : 0;
};
```

##### （三）复杂度分析

+ 时间复杂度：O(logn)。整数位数决定了时间复杂度，整数位数是整数字面量的对数。
+ 空间复杂度：O(logn)。额外使用了字符串数组，数组规模由整数位数决定。

> 本文采用 JavaScript 作为实现语言。
