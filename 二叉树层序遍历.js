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
levelOrder([3,9,20,null,null,15,7])