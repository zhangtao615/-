<<<<<<< HEAD
//序列化
var serialize = function(root) {
    var res = [];
    serialize(root.left);
    res.push(node.val || null);
    serialize(root.right);
    return res;
=======
//序列化
var serialize = function(root) {
    var res = [];
    serialize(root.left);
    res.push(node.val || null);
    serialize(root.right);
    return res;
>>>>>>> 0da4ad747f89d3350d18820d0c62dad875ef851a
};