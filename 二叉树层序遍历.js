<<<<<<< HEAD
var levelOrder = function(root) {
    var res = [];
    if(!root) return res;
    var que = [];
    que.push(root);
    while(que.length !== 0){
        var len = que.length;
        res.push([]);
        for(var i=1;i<=len;++i){
            var node  = que.shift();
            res[res.length -1].push(node.value);
            if(node.left) que.push(node.left);
            if(node.right) que.push(node.right);
        }
    }
    console.log(res)
};
=======
var levelOrder = function(root) {
    var res = [];
    if(!root) return res;
    var que = [];
    que.push(root);
    while(que.length !== 0){
        var len = que.length;
        res.push([]);
        for(var i=1;i<=len;++i){
            var node  = que.shift();
            res[res.length -1].push(node.value);
            if(node.left) que.push(node.left);
            if(node.right) que.push(node.right);
        }
    }
    console.log(res)
};
>>>>>>> 0da4ad747f89d3350d18820d0c62dad875ef851a
levelOrder([3,9,20,null,null,15,7])