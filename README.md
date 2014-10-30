#Binary Search Tree in Javascript

##Use

Shows an implementation of the Binary Search Tree written in Javascript. This BST uses five different functions: insert(value), contains(value), size(), depth(), and balance(). 

##insert(value)

Adds a node to a position on the tree based on its value. If the number is smaller than the root node, it goes to the left, otherwise it goes to the right. It recursively checks each node until it gets to a null node, then it takes its place.

##contains(value)

Searches the binary search tree for a node with this value. The BST is smart enough to know where a node will be if its value is smaller/larger than other nodes.

##size()
 
Uses inOrder sorting to traverse the BST and increment a size variable to output the BST's size.

##depth()

Checks the right and left sides of the BST to see where the highest tree is.

##balance()

Mimics the depth function, but instead of just finding the highest tree, this function compares how balanced the left tree is to the right tree. If the right tree is higher than the left tree, it returns a negative number.