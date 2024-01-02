// hash tables 
// -- one way only:   
// -- deterministic:  

// Collisions
// an item that hashes to the same index as another item
// can be handled in a few ways:
// -- separate chaining: the proccess of putting all of thye key values pairs that map to a particular address in the same address space its what is called separate chaining
// -- linear probing(open addressing): already an item in an address space, we can store the item in the next available address space
// -- another way is to have a linked list at each address space, and store the items in the linked list
//