/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    // 时 O(n^2) 空 O(n)
    let n = s.length;
    let count = 0;
    const dp = new Array(n);

    for (let j = 0; j < n; j++) {
        for (let i = 0; i <= j; i++) {
            if (s[i] == s[j] && (j - i <= 1 || dp[i + 1])) {
                dp[i] = true;
                count++;
            } else {
                dp[i] = false;
            }
        }
    }
    return count;
};