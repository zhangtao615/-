var connect = function(root) {
    if(root == null) return null;
    var arr = [root];
    while(arr.length > 1){
        var len = arr.length;
        while(n-- > 0){
            var node = arr.shift();
            if(n==0)
                node.next = null;
            else node.next = arr[0];
            if(node.left != null)
                arr.push(node.left);
            if(node.right != null)
                arr.push(node.right);

        }
    }
    return root;
};
connect([1,2,3,4,5,null,7])