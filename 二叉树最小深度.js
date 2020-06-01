var minDepth = function(root) {
    if(!root) return 0;
    var right = minDepth(root.right);
    var left = minDepth(root.left);
    if(root.left == null || root.right == null) return right + left + 1;
    return Math.min(left,right) + 1; 
};
minDepth([1,2]);