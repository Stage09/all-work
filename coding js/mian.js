
// 1-misol

// function middleWay(a, b) {
//     return [a[1], b[1]];
// }


// 2-misol

// function makeEnds(nums) {
//     return [nums[0], nums[nums.length - 1]]; 
// }


// 3-misol

// function has23(nums) {
    // return nums.includes(2) || nums.includes(3);
// }


// 4-misol

// function no23(nums) {
//     return !nums.includes(2) && !nums.includes(3);
// }


// 5-misol

// function makeLast(nums) {
//     let result = new Array(nums.length * 2).fill(0);
//     result[result.length - 1] = nums[nums.length - 1];
//     return result;
// }


// 6-misol

// function double23(nums) {
//     return (nums[0] === 2 && nums[1] === 2) || (nums[0] === 3 && nums[1] === 3);
// }


// 7-misol

// function fix23(nums) {
//     if (nums[0] === 2 && nums[1] === 3) {
//         nums[1] = 0; 
//     }
//     if (nums[1] === 2 && nums[2] === 3) {
//         nums[2] = 0;  
//     }
//     return nums;
// }


// 8-misol

// function start1(a, b) {
//     let count = 0;
//     if (a.length > 0 && a[0] === 1) {
//         count++;
//     }
//     if (b.length > 0 && b[0] === 1) {
//         count++;
//     }
//     return count;
// }


// 9-misol


// function biggerTwo(a, b) {
//     let sumA = a[0] + a[1];
//     let sumB = b[0] + b[1];

//     if (sumA >= sumB) {
//         return a;
//     } else {
//         return b;
//     }
// }
