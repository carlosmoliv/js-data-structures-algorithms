const sampleArray = [11, 3, 23,7, 17];

// Not need to reindex the array
// Both are O(1)
sampleArray.push(5);
sampleArray.push(5);

// Need to reindex the array
// Both are O(n)
sampleArray.shift(11);
sampleArray.unshift(11);