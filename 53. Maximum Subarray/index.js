function func(nums) {
    if(nums.length === 1) return nums[0];
    let max = nums[0];
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    for(let i = 1; i< nums.length; i++) {
        dp[i] = Math.max(nums[i], nums[i]+ dp[i-1])
        max = Math.max(dp[i],max);
    }

    return max;
}

module.exports = func;