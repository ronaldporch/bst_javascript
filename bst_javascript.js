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
    traverse: function(process){

        function inOrder(node){
            if (node){

                if (node.left !== null){
                    inOrder(node.left);
                }            

                process.call(this, node);

                if (node.right !== null){
                    inOrder(node.right);
                }
            }
        }
            
        inOrder(this._root);
    	},
    
     size: function(){
        var length = 0;

        this.traverse(function(node){
            length++;
        });

        return length;
    },  
    traverse: function(process){

        function inOrder(node){
            if (node){

                if (node.left !== null){
                    inOrder(node.left);
                }            

                process.call(this, node);

                if (node.right !== null){
                    inOrder(node.right);
                }
            }
        }
            
        inOrder(this.root);
    	},
    
     size: function(){
        var length = 0;

        this.traverse(function(node){
            length++;
        });

        return length;
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
console.log(bst.depth());