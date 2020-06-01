var postorder = function(root) {
    if(!root) return ;
    var res = [];
    function mid(node){
        if(!node) return ;
        node.children.forEach(item => {
            arguments.callee(item);
        });
        res.push(node.val);
    }
    mid(root);
    return res;
};