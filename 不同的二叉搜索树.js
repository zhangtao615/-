//该题符合公式 C = 1; C= C* 2 * (2*n + 1) / (n + 2);
var numTrees = function(n) {
    var C = 1;
    for(var i = 0;i<n;++i){
        C = C * 2 * (2 * i + 1) / (i + 2);
    }
    return C;
};