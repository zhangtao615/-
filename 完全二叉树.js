var isValidBST = function(root) {
    return mid(root, -Infinity, Infinity);
};
const mid = (root, min, max) => {
    if (root === null) return true;
    if (root.val <= min || root.val >= max) return false;
    return mid(root.left, min, root.val) && mid(root.right, root.val, max);
}

