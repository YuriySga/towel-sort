
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (!matrix) return arr;    
  let k=0;

  matrix.forEach(item => {
    k++;
    if (k%2 > 0) {
      item.forEach(item1 => arr.push(item1));         
      }
      else { 
        item.reverse().forEach(item1 => arr.push(item1));  
      }      
  });

  return arr;
}
