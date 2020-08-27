/**
 * @desc   字符串全反转法
 * @param  {number} x
 * @return {boolean}
 */
function isPalindrome1 (x) {
    if (x < 0) return false;

    let result = (x).toString().split("");
    result.reverse();
    result = parseInt(result.join(""));

    return result === x;
}

/**
 * @desc   字符串半反转法
 * @param  {number} x
 * @return {boolean}
 */
function isPalindrome2 (x) {
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

/**
 * @desc   求余全反转法
 * @param  {number} x
 * @return {boolean}
 */
function isPalindrome3 (x) {
    if (x < 0) return false;

    let backup = x;
    let result = 0;

    while (x) {
        result = result * 10 + x % 10;
        x = Math.floor(x/10);
    }

    return result === backup;
}

/**
 * @desc   求余半反转法
 * @param  {number} x
 * @return {boolean}
 */
function isPalindrome4 (x) {
    if (x < 0) return false;

    let next = 0;

    while (x > next) {
        next = next * 10 + x % 10;
        x = Math.floor(x/10);
    }

    // 处理原整数长度为奇数、偶数的两种情况。
    return x === next || x === Math.floor(next/10);
}




console.log(isPalindrome(12112));
console.log(isPalindrome(12121));
