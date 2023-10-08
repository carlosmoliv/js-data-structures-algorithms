// n+n = 2n
// Would make sense to say that is a O(2n)
// But we don't care about the constants
// So we just drop the constant and say that is a O(n)
// So, first rule to simplifying big O notation is drop/remove contants
function logItems(n) {
  for(let i = 0; i < n; i++) {
    console.log(i) 
  }

  for(let j = 0; j < n; j++) {
    console.log(j) 
  }       
}

logItems(3)