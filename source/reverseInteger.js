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
