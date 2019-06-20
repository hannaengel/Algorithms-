let nestedArray = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

function findLargestNums(nestedArray){
  let largestNumsArray = []
  nestedArray.forEach(function(array){
    let sortedArray = array.sort(function(a, b){return b-a})
    console.log(sortedArray)
    largestNumsArray.push(sortedArray.shift())
  })
  return largestNumsArray
}

findLargestNums(nestedArray);