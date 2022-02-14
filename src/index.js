
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
        return [];
    }
    let newArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) {
            matrix[i].reverse();
        }
    }
    newArr = matrix.flat();
    return newArr;
}
