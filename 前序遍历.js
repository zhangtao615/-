var tree = {
    value : '-',
    left:{
        value:'a',
    },
    right:{
        value:'*',
        left:{
            value:'b'
        },
        right:{
            value:'c'
        }
    },
    left:{
        value:'/',
        left:{
            value:'d'
        },
        right:{
            value:'e'
        }
    }
}

//递归遍历
var res = []; //保存结果
// var preOrder = function(node){
//     if(node){//判断树是否为空
//         res.push(node.value);//将节点存入数组
//         preOrder(node.left);//遍历左节点
//         preOrder(node.right);//遍历右节点
//     }
// }


//非递归遍历
var preOrder = function(node){
    if(node){
        var stack = [node]; //将二叉树压入栈
        while(stack.length != 0){
            node = stack.pop(); //从栈中取出一个节点
            res.push(node.value);//将节点值存入数组
            if(node.right) stack.push(node.right);//如果存在右子树，将右子树压入栈
            if(node.left) stack.push(node.left);//如果存在左子树，将左子树压入栈
        }
    }
}



preOrder(tree);
console.log(res);