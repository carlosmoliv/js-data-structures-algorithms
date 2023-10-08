// a and b both can't be equal to n. So, the right answer is O(a) and O(b)
// Simplifying => O(a+b)
function logItems(a,b) {
  for(let i = 0; i < a; i++) {
    console.log(i) 
  }

  for(let j = 0; j < b; j++) {
    console.log(j) 
  }       
}

// O(a*b)
function logItems(a,b) {
  for(let i = 0; i < a; i++) {
    for(let j = 0; j < b; j++) {
      console.log(i,j) 
    }       
  }
}
