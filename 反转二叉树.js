<<<<<<< HEAD
var flipEquiv = function(root1, root2) {
    if(root1 == root2) return true;
    if(root1 == null || root2 == null || root1.val != root2.val) return false;
    return (flipEquiv(root1.left,root2.left) && flipEquiv(root1.right,root2.right)||flipEquiv(root1.left,root2.right)&&flipEquiv(root1.right,root2.left));
=======
var flipEquiv = function(root1, root2) {
    if(root1 == root2) return true;
    if(root1 == null || root2 == null || root1.val != root2.val) return false;
    return (flipEquiv(root1.left,root2.left) && flipEquiv(root1.right,root2.right)||flipEquiv(root1.left,root2.right)&&flipEquiv(root1.right,root2.left));
>>>>>>> 0da4ad747f89d3350d18820d0c62dad875ef851a
};