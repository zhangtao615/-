var searchBST = function(root, val) {
    var node = root;
    while(node){
        if(node.val > val) node = node.left;
        else if(node.val < val) node = node.right;
        else return node;
    }
    return null;
};
searchBST();