// function func(prices) {
//     let max = 0;
//     for(let i = 0; i< prices.length; i++) {
//         const left = prices.slice(0,i+1)
//         const right = prices.slice(i+1);
//         const maxOfLeft = getMaxDiff(left);
//         const maxOfRight = getMaxDiff(right);
//         if(maxOfLeft + maxOfRight > max){
//             max = maxOfLeft + maxOfRight
//         }
//     }
//     return max;
// }

// function func(prices) {
//     let max = 0;
//     const left = prices.slice(0,2);
//     let leftMin = Math.min(left[0],left[1]);
//     let leftMax = Math.max(left[0],left[1]);
   
//     let leftResult = left[1] > left[0] ? left[1] - left[0] : 0;

//     const right = prices.slice(2, prices.length);

//     const initRightLength = right.length;
//     const initialRightResult = getMaxDiff(right);
//     let total = leftResult + initialRightResult.result;
//     let rightMin = initialRightResult.min;
//     let rightMax = initialRightResult.max;
//     let rightResult = initialRightResult;
//     for(let i = 0; i< initRightLength; i++) {
        
//         const value = right.shift();
//         left.push(value);
//         const newLeftResult = value - leftMin;
//         if(newLeftResult > leftResult) {
//             leftResult = newLeftResult; 
//         }

//         leftMin = Math.min(leftMin, value);
        
//         if(value == rightMin || value == rightMax) {
//             rightResult = getMaxDiff(right);
//             rightMin = rightResult.min;
//             rightMax = rightResult.max;
//         }
//         const newTotal = leftResult + rightResult.result;
//         total = Math.max(total, newTotal);
//     }
//     return total;
// }


// function getMaxDiff(arr) {
//     if(arr.length === 2) {
//         return {
//             result: arr[1] > arr[0] ? arr[1] - arr[0] : 0,
//             min: arr[0],
//             max: arr[1]
//         }
//     }
//     if(arr.length === 1 || arr.length === 0) {
//         return {
//             result: 0
//         };
//     }

//     const half = Math.floor(arr.length / 2);
//     const newArrLeft = [...arr].splice(0, half);
//     const newArrRight = [...arr].slice(half);
//     const minOfLeft = Math.min(...newArrLeft);
//     const maxOfRight = Math.max(...newArrRight);
//     const result = {
//         result: maxOfRight > minOfLeft ? maxOfRight - minOfLeft : 0,
//         min: minOfLeft,
//         max: maxOfRight
//     }
//     const resultLeft = getMaxDiff(newArrLeft);
//     const resultRight = getMaxDiff(newArrRight)

//     let arrResult = [result, resultLeft, resultRight];
//     arrResult.sort((a,b)=> b.result - a.result);
//     return arrResult[0]
//     //return Math.max(maxOfRight - minOfLeft, getMaxDiff(newArrLeft), getMaxDiff(newArrRight));
// }

module.exports = func;