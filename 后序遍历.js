<<<<<<< HEAD
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

var res = []; //存储遍历结果

//递归遍历
// var postOrder = function (node) {
//     if (node) {
//         postOrder(node.left); //递归遍历左子树
//         postOrder(node.right); //递归遍历右子树
//         res.push(node.value); //将节点值存入数组
//     }
// }

//非递归
var postOrder = function(node){
    var stack = [node];//将节点压入栈
    var tmp = null; //定义缓存变量
    while(stack.length != 0){
        tmp = stack[stack.length - 1];//保存栈顶值
        if(tmp.left && node != tmp.left && node != tmp.right){//存在左子树
            stack.push(tmp.left);//左子树节点压入栈
        }else if(tmp.right && node != tmp.right){//存在右子树
            stack.push(tmp.right); //右子树压入栈
        }else{
            res.push(stack.pop().value);
            node = tmp;
        }
    }

}

postOrder(tree);
=======
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

var res = []; //存储遍历结果

//递归遍历
// var postOrder = function (node) {
//     if (node) {
//         postOrder(node.left); //递归遍历左子树
//         postOrder(node.right); //递归遍历右子树
//         res.push(node.value); //将节点值存入数组
//     }
// }

//非递归
var postOrder = function(node){
    var stack = [node];//将节点压入栈
    var tmp = null; //定义缓存变量
    while(stack.length != 0){
        tmp = stack[stack.length - 1];//保存栈顶值
        if(tmp.left && node != tmp.left && node != tmp.right){//存在左子树
            stack.push(tmp.left);//左子树节点压入栈
        }else if(tmp.right && node != tmp.right){//存在右子树
            stack.push(tmp.right); //右子树压入栈
        }else{
            res.push(stack.pop().value);
            node = tmp;
        }
    }

}

postOrder(tree);
>>>>>>> 0da4ad747f89d3350d18820d0c62dad875ef851a
console.log(res);