// Linked Lists dont have indexes!
// Arrays are a contiguous block of memory but Linked Lists are not. They can be in a lot of different places in memory.

// First element is the head and last is the tail
// Each element is a node
// Each node has a value and a pointer to the next node
// The last node points to null
// 11 -> 3 -> 23 -> 7 -> null 

// Linked Lists are good for insertion and deletion, but not for searching
// Arrays are good for searching, but not for insertion and deletion

// Does not matter the number of items, the number of steps to insert or delete is always the same
// Wich means that the time complexity is O(1) - constant time

// Can't go backwards in a linked list 
// So, popping something from the end of a linked list is not a constant time operation. Is a linear time operation O(n)
// whether we are looking for something by value or looking for it by index, it's O(n), because we have to traverse the entire linked list to find it

// This is a difference between linked lists and arrays because arrays we can go to the next index as an O(1) operation
// But in a linked list, we have to traverse the entire linked list to get to the next node

/** 
 * What looks like under the hood:
 * { 
 *   head: { 
 *     value: 12, 
 *     next: { 
 *       value: 99,
 *       next: { 
 *         value: 37, 
 *         next: null (tail)
 *       } 
 *     } 
 *   } 
 * }
 * 
 * */ 




