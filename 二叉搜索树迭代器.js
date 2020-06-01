var BSTIterator = function(root) {
    res = [];
    var midOrder = function(node){
        if(node){
            if(node.left) midOrder(node.left);
            res.push(node.val);
            if(node.right) midOrder(node.right);
        }
    }
    midOrder(root);
    console.log(res);
};
BSTIterator([[[7,3,15,null,null,9,20]],[null],[null],[null],[null],[null],[null],[null],[null],[null]])