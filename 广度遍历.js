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

var res = [];//存储遍历结果

var deepOrder = function(node){
    if(node) {//判断节点是否为空
        var que = [node]; //将树放入队列
        while(que.length != 0){
            node = que.shift();//从队列中取出一个节点
            res.push(node.value);
            if(node.left) que.push(node.left);//存在左子树，将左子树放入队列
            if(node.right) que.push(node.right);//存在右子树，将右子树放入队列
        }
    }
}
deepOrder(tree);
console.log(res)