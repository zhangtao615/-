<<<<<<< HEAD
var maxDepth = function (node) {
    if (!node) return 0;
    else {
        var right = maxDepth(root.right);
        var left = maxDepth(root.left);
        return Math.max(right, left) + 1
    }
    
};
=======
var maxDepth = function (node) {
    if (!node) return 0;
    else {
        var right = maxDepth(root.right);
        var left = maxDepth(root.left);
        return Math.max(right, left) + 1
    }
    
};
>>>>>>> 0da4ad747f89d3350d18820d0c62dad875ef851a
maxDepth([3, 9, 20, null, null, 15, 7])