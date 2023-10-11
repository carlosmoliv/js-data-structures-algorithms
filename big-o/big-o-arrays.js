const sampleArray = [11, 3, 23,7, 17];

// Not need to reindex the array
// Both are O(1)
sampleArray.push(5);
sampleArray.pop();

// Manipulates the beginning of the array - shift: remove, unshift: add
// Need to reindex the array
// Both are O(n)
sampleArray.shift(11);
sampleArray.unshift(11);

// 1st param: index to start
// 2nd param: number of elements to remove 
// 3rd param: elements to add
// Reindex the array - O(n)
sampleArray.splice(1, 0, 'Hey');

// Search by value - O(n)
sampleArray.find((element) => element === 23);
// Search by index - O(1)
sampleArray.indexOf(23);

// One of the advantages of an array, we can find the element by index
// But indexes also is an disadvantage, because we need to reindex the array when we add or remove elements from the beginning of the array
// 