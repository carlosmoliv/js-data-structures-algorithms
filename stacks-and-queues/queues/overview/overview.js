// FIFO

// ---- Array implementation ----
// push or pop is O(1)
// unshift or shift is O(n)
// So with a queue you need to add one and remove from the other end.
// Doesn't matter wich end you use for adding or removing
// so, with an array you can use push and shift or unshift and pop
// one is going to be O(n) and the other O(1)
// no way to do both O(1)

// ---- Linked List implementation ----
// With a linked list when you pop an item from the end is O(n)
// But to push an item to the end is O(1)
// On the other end shift is O(1) and unshift is O(1)
// So what you dont want to do with a linked list is dequeue from the end because is O(n)
// What you want to do is enqueue from the end and dequeue from the beginning and that is O(1)
