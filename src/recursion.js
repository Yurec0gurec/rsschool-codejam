 const recursursion = (tree) => {
     let answer = [];
     const recurs = (rootNode, answer, i) => {
         answer[i] = answer[i] || [];
         answer[i].push(rootNode.value);
         if (rootNode.left !== undefined)
             recurs(rootNode.left, answer, i + 1);
         if (rootNode.right !== undefined)
             recurs(rootNode.right, answer, i + 1);
     };
     recurs(tree, answer, 0);
     return answer;
 };
 module.exports = recursursion;
