function compareArrays(arr1, arr2) {
  let sameLength = arr1.length === arr2.length;
  let result = false;
  if (sameLength) {
    result = arr1.every((item, index) => {
          return item === arr2[index] 
      });
}
return result;
};


function advancedFilter(arr) {
  let result = arr.filter((arr) => arr > 0).filter((arr) => arr % 3 === 0).map((arr) => arr * 10)
  return result;
}
