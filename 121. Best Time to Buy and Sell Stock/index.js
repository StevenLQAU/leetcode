function func(prices) {
    if(prices.length < 2) {
        return 0;
    }
    const dp = new Array(prices.length).fill(0);
    dp[0] = 0;
    dp[1] = Math.max(prices[1] - prices[0], dp[0])

    let currentMin = Math.min(prices[0], prices[1]);
    let currentBuyPrice = prices[0];
    for(let i = 2; i < prices.length; i++) {
        dp[i] = Math.max(dp[i-1], prices[i]-currentBuyPrice, prices[i]- currentMin);
        currentMin = Math.min(prices[i], currentMin);
        // for(let j = 0 ; j < i ; j++) {
        //     dp[i] = Math.max(dp[i], dp[i-1],prices[i] - prices[j],0)
        // }
    }
    return dp[dp.length-1];
}

module.exports = func;