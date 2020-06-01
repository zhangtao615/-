<<<<<<< HEAD
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
=======
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
>>>>>>> 0da4ad747f89d3350d18820d0c62dad875ef851a
BSTIterator([[[7,3,15,null,null,9,20]],[null],[null],[null],[null],[null],[null],[null],[null],[null]])