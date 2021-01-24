/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    // 时 O(m*n) 空 O(m*n)

    if (matrix.length === 0) return 0;
    let dp = [];
    let m = matrix.length;
    let n = matrix[0].length;
    let max = Number.MIN_VALUE;

    for (let i = 0; i < m + 1; i++) {
        if (i === 0) {
            dp[i] = Array(n + 1).fill(0);
        } else {
            dp[i] = [0];
        }
    }

    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (matrix[i - 1][j - 1] === "1") {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
                max = Math.max(max, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }

    return max * max;
};