function check(p,q){
    if(!p && !q) return true;
    if(!p || !q) return false;
    return p.val === q.val && check(p.left,q.right) && check(p.right,q.left);
}
var isSymmetric = function(root) {
    return check(root,root);
};

isSymmetric([1,2,2,3,4,4,3])