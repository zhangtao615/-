var tree = {
    value: "-",
    left: {
        value: '+',
        left: {
            value: 'a',
        },
        right: {
            value: '*',
            left: {
                value: 'b',
            },
            right: {
                value: 'c',
            }
        }
    },
    right: {
        value: '/',
        left: {
            value: 'd',
        },
        right: {
            value: 'e',
        }
    }
}
var deepOrder = function(node) {
    var res = [];存储遍历结果
    var dep = function (node, depth){
        if(!node) return
        res[depth] = res[depth]||[];
        res[depth].push(node.val);
        dep(node.left, depth + 1);
        dep(node.right, depth + 1);
    }
    dep(root, 0)
    return res.reverse()   
};
deepOrder(tree);