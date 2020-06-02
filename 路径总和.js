var hasPathSum = function(root, sum) {
    if(!root) return false;
    if(sum == 0) return true;
    if (root.left === null && root.right === null) return root.val === sum;
    sum = sum-root.val;
    return hasPathSum(root.left, sum) || hasPathSum(root.right,sum);
};