var isSameTree = function(p, q) {
    if(!p && !q) return true
    if(!p || !q) return false 
    if(p.val!==q.val){
        return false;
    }
    return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right); 
};

//序列化
var sameTree = function(p,q){
    return JSON.stringify(p) === JSON.stringify(q);
}