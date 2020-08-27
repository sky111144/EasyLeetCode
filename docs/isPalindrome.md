### LeetCode：回文数

#### 题目描述

判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

#### 一、字符串全反转法

##### （一）实现思路

首先，将整数转化为字符串数组，反转数组；

然后，将数组转化为字符串，字符串再转化为整数。

最后，比较原整数、反转后的整数是否相等。

##### （二）实现代码

``` JavaScript
/**
 * @desc   字符串全反转法
 * @param  {number} x
 * @return {boolean}
 */
function isPalindrome (x) {
    if (x < 0) return false;

    let result = (x).toString().split("");
    result.reverse();
    result = parseInt(result.join(""));

    return result === x;
}
```

##### （三）复杂度分析

+ 时间复杂度：O(logn)。整数位数决定了时间复杂度，整数位数是整数字面量的对数。

+ 空间复杂度：O(logn)。额外使用了字符串数组，数组规模由整数位数决定。


#### 二、字符串半反转法

##### （一）实现思路

首先，将整数转化为字符串数组，并从字符串数组中间，分割为两个长度相等的数组。

然后，将从原整数后半段，分割出来的数组反转，转化为字符串，再转化为整数。

最后，对比这两个整数是否相等。

##### （二）实现代码

``` JavaScript
/**
 * @desc   字符串半反转法
 * @param  {number} x
 * @return {boolean}
 */
function isPalindrome (x) {
    if (x < 0) return false;

    let temp = (x).toString().split("");
    let mid = Math.floor(temp.length/2);

    // 处理原整数长度为奇数、偶数的两种情况。
    let next = temp.slice(temp.length % 2 === 0 ? mid : mid + 1);
    let prev = temp.slice(0, mid);

    next.reverse();

    prev = parseInt(prev.join(""));
    next = parseInt(next.join(""));

    return prev === next;
}
```

##### （三）复杂度分析

> 对字符串全反转法，做了一定的优化，但是总体算法复杂度分析依然没变。

+ 时间复杂度：O(logn)。整数位数决定了时间复杂度，整数位数是整数字面量的对数。

+ 空间复杂度：O(logn)。额外使用了字符串数组，数组规模由整数位数决定。


#### 三、求余全反转法

##### （一）实现思路

首先，根据十进制数的数学定义，用求余运算取原整数的低位，也就是反转后的高位，从高位到低位构造出反转后的整数。

然后，比较原整数、反转后的整数是否相等。

##### （二）实现代码

``` JavaScript
/**
 * @desc   求余全反转法
 * @param  {number} x
 * @return {boolean}
 */
function isPalindrome (x) {
    if (x < 0) return false;

    let backup = x;
    let result = 0;

    while (x) {
        result = result * 10 + x % 10;
        x = Math.floor(x/10);
    }

    return result === backup;
}
```

##### （三）复杂度分析

+ 时间复杂度：O(logn)。整数位数决定了时间复杂度，整数位数是整数字面量的对数。
+ 空间复杂度：O(1)。没有使用额外的内存空间。


#### 四、求余半反转法

##### （一）实现思路

首先，根据十进制数的数学定义，用求余运算取原整数的低位，也就是反转后的高位，从高位到中间位构造出，原整数一半长度的反转整数。

同时，将原的整数，不断除以10，直到反转后的整数长度大于等于原整数的一半。

然后，比较原整数、反转后的整数是否相等。

##### （二）实现代码

``` JavaScript
/**
 * @desc   求余半反转法
 * @param  {number} x
 * @return {boolean}
 */
function isPalindrome (x) {
    if (x < 0) return false;

    let next = 0;

    while (x > next) {
        next = next * 10 + x % 10;
        x = Math.floor(x/10);
    }

    // 处理原整数长度为奇数、偶数的两种情况。
    return x === next || x === Math.floor(next/10);
}
```

##### （三）复杂度分析

> 对求余全反转法，做了一定的优化，但是总体算法复杂度分析依然没变。

+ 时间复杂度：O(logn)。整数位数决定了时间复杂度，整数位数是整数字面量的对数。
+ 空间复杂度：O(1)。没有使用额外的内存空间。


> 本文采用 JavaScript 作为实现语言。
