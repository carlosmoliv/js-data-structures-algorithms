// Another way to simplify the Big O notation is to drop non-dominant terms
// O(n^2) + O(n) = O(n^2 + n)
// If n was 100, n^2 would be 10,000 and n would be 100 where the single n is only adding 100 more, so it's not really affecting tyhe number of operations
function logItems(n) {
  // O(n^2)
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      console.log(i, j) 
    }       
  } 

  // O(n)
  for(let k = 0; k < n; k++) {
    console.log(k)
  }
}

logItems(10) 