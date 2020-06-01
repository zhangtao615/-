<<<<<<< HEAD
var sumOfLeftLeaves = function(root) {
    if(!root) return 0;
    var sum = 0;
    if(root.left&&!root.left.left&&!root.left.right){
        sum = root.left.val
    }
    return sum+ sumOfLeftLeaves(root.left)+sumOfLeftLeaves(root.right)
=======
var sumOfLeftLeaves = function(root) {
    if(!root) return 0;
    var sum = 0;
    if(root.left&&!root.left.left&&!root.left.right){
        sum = root.left.val
    }
    return sum+ sumOfLeftLeaves(root.left)+sumOfLeftLeaves(root.right)
>>>>>>> 0da4ad747f89d3350d18820d0c62dad875ef851a
};