// More randomize distribution if we use a prime number for the size of the hash table
class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  // (underscore) a method that only should be called by other methods in the class. Should not be calling directly
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // key.charCodeAt - every latter has a particular numeric value
      // prime number to make more random
      // modular gives the remainder when divided
      // dataMap is the address space
      // remainder will always be 0 through 6
      // that is going to determine what address space a particular string is gonna go into
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
}
