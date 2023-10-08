// The number of items that were output in this case is in times n. O(n^2)
// So, if we had two sets of code that accomplish the same task and one was O(n^2) and the other is O(n), the O(n) would be more efficient.
// If you can write your code in a way that ius going to become O(n), is going to be more efficient than O(n^2)
function logItems(n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      console.log(i, j) 
    } 
  }       
}

logItems(10)