// Most efficieent way to search through a sorted array, for example number 1
// Cut in half, is the number 1 in the first half or the second half?
// Not in second half, so discard second half
// Next, cut in half again, is the number 1 in the first half or the second half?
// Not in second half, so discard second half
// Repeat until we find the number 1
// technique is called divide and conquer
// number of steps that it takes to find the number, for example in this case 3 steps
// So, the number of steps is log n
// 2^3 = 8. log2 8 = 3
const simpleArray = [1, 2, 3, 4, 5, 6, 7, 8];