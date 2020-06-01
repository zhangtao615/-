<<<<<<< HEAD
function check(p,q){
    if(!p && !q) return true;
    if(!p || !q) return false;
    return p.val === q.val && check(p.left,q.left) && check(p.right,q.left);
}
var isSymmetric = function(root) {
    return check(root,root);
};

=======
function check(p,q){
    if(!p && !q) return true;
    if(!p || !q) return false;
    return p.val === q.val && check(p.left,q.left) && check(p.right,q.left);
}
var isSymmetric = function(root) {
    return check(root,root);
};

>>>>>>> 0da4ad747f89d3350d18820d0c62dad875ef851a
isSymmetric([1,2,2,3,4,4,3])