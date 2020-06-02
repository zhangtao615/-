var isBalanced = function(root) {
    return mid(root) != -1;
};
var mid = function(root) {
    if(!root) return 0;
    var left = mid(root.left);
    var right = mid(root.right);
    if(left == -1 || right == -1) return -1;
    return Math.abs(left - right) < 2 ? Math.max(left,right) + 1 : -1
}
isBalanced([1,2,2,3,3,null,null,4,4])