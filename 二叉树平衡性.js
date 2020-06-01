<<<<<<< HEAD
var isBalanced = function(root) {
    if(!root) return true
    let res=true
    function getDepth(root){
        if(!root) return 0
        //左子树的深度
        const left=getDepth(root.left)
        //右子树的深度
        const right=getDepth(root.right)
        //判断它们的深度相差是否大于1
        if(Math.abs(left-right)>1) res=false
        //树的深度加1，求树的最大深度
        return Math.max(left,right)+1
    }
    getDepth(root)
    return res;
};

=======
var isBalanced = function(root) {
    if(!root) return true
    let res=true
    function getDepth(root){
        if(!root) return 0
        //左子树的深度
        const left=getDepth(root.left)
        //右子树的深度
        const right=getDepth(root.right)
        //判断它们的深度相差是否大于1
        if(Math.abs(left-right)>1) res=false
        //树的深度加1，求树的最大深度
        return Math.max(left,right)+1
    }
    getDepth(root)
    return res;
};

>>>>>>> 0da4ad747f89d3350d18820d0c62dad875ef851a
isBalanced([3,9,20,null,null,15,7])