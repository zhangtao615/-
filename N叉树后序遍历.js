<<<<<<< HEAD
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
=======
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
>>>>>>> 0da4ad747f89d3350d18820d0c62dad875ef851a
};