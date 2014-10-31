function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype = {
    constructor: BinarySearchTree,  
    
    insert: function(value){
        var node = {
            value: value,
            left: null,
            right: null
        },
            current;
        
        if (this.root === null){
            this.root = node;
        } else {
            current = this.root;
            
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                    
                } else if (value > current.value){
                        if(current.right === null){
                            current.right = node;
                            break;
                        } else {
                            current = current.right;
                        }
                    } else {
                        break;
                    }
                }
        }
    },
    
    contains: function(value){
        var found = false,
            current = this.root
        while(!found && current){
            if (value < current.value){
                current = current.left;
            }else if (value > current.value){
            current = current.right;
            }else {
                found = true;
            }
        }
        return found;
    },
    inOrder: function(){
            value = [];
            current = this.root;
            
        function traversing(current){
            if (current){

                if (current.left !== null){
                    traversing(current.left);
                }            

                value.push(current.value);

                if (current.right !== null){
                    traversing(current.right);
                }
            }
        }
            traversing(current);
            return value;
        },

    preOrder: function(){
            value = [];
            current = this.root;
            
        function traversing(current){
            if (current){

                value.push(current.value);

                if (current.left !== null){
                    traversing(current.left);
                }            

                if (current.right !== null){
                    traversing(current.right);
                }
            }
        }
            traversing(current);
            return value;
    },
    

    postOrder: function(){
            value = [];
            current = this.root;
            
        function traversing(current){
            if (current){

                if (current.left !== null){
                    traversing(current.left);
                }            

                if (current.right !== null){
                    traversing(current.right);
                }

                value.push(current.value);
            }
        }
            traversing(current);
            return value;
    },
    
     size: function(){
        
     var length = this.inOrder().length;
     return length;
    },  

    breadthFirst: function(func){
        var queue = [this.root];
        var list = [];
        while(queue.length!=0) {
            var node = queue.shift();
            list.push(node.value);
            if (node.left) {
                queue.push(node.left);
            };
            if (node.right) {
                queue.push(node.right);
            };
        }
        return list;
    },

    depth: function(){
        var pointer1 = this.root,
        pointer2 = this.root,
        leftHeight = 0,
        rightHeight = 0
        while(pointer1){
            pointer1 = pointer1.right;
            rightHeight++;
        };
        while(pointer2){
            pointer2 = pointer2.left;
            leftHeight++;
        };
        return Math.max(rightHeight, leftHeight);
    },
    
    balance: function(){
        var pointer1 = this.root,
        pointer2 = this.root,
        leftHeight = 0,
        rightHeight = 0
        while(pointer1){
            pointer1 = pointer1.right;
            rightHeight++;
        };
        while(pointer2){
            pointer2 = pointer2.left;
            leftHeight++;
        };
        return leftHeight - rightHeight;
    }
}

var bst = new BinarySearchTree;
bst.insert(5);
bst.insert(4);
bst.insert(6);
bst.insert(0);
bst.insert(10);
bst.insert(9);
console.log(bst.contains(4));
console.log(bst.size());
console.log(bst.depth());
console.log(bst.balance());
console.log(bst.inOrder());
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.breadthFirst());