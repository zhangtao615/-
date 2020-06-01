//序列化
var serialize = function(root) {
    var res = [];
    serialize(root.left);
    res.push(node.val || null);
    serialize(root.right);
    return res;
};