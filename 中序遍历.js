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

var res = []; //定义保存中序遍历结果的数组
//递归遍历
// var midOrder = function(node) {
//     if (node) { //判断二叉树是否为空
//         midOrder(node.left); //递归遍历左子树
//         res.push(node.value); //将结点的值存入数组中
//         midOrder(node.right); //递归遍历右子树
//     }
// }

//非递归遍历
var midOrder = function(node){
    var stack = [];
    while(stack.length != 0 || node){ //如果栈不为空或结点不为空，则循环遍历
        if(node){
            stack.push(node);//将结点压入栈
            node = node.left;//将左子树作为当前结点
        }else{ //左子树为空，即没有左子树的情况
            node = stack.pop();
            res.push(node.value);
            node = node.right; //将右结点作为当前结点
        }
    }
}

midOrder(tree);
console.log(res);