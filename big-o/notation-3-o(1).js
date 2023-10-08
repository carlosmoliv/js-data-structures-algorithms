// Only one operation, so doesn't matter how big n is, it will always be 1 operation
// O(1) 
function addItems(n) {
  return n+n
}

// With two operations, O(2) but we can simplify to O(1)
// So O(1) is reffred to as constant time
// No matter what n is, the numuber of operations dosn't change as n grows
// it is the most efficient big o
function addItems(n) {
  return n+n
}