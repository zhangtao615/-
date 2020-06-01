var maxDepth = function (node) {
    if (!node) return 0;
    else {
        var right = maxDepth(root.right);
        var left = maxDepth(root.left);
        return Math.max(right, left) + 1
    }
    
};
maxDepth([3, 9, 20, null, null, 15, 7])