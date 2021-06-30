// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > max) {
      max = element;
    } else if (element < min) {
      min = element;
    }
    sum += element;
  }
  let avg = (sum / arr.length).toFixed(2);
  return { min:min, max:max, avg:avg };// начальный код
}

// Задание 2
function worker(...arr) {
  let sum =  Math.max(...arr);
  return sum;
};
console.log(worker([1,2,3],[4,5,6]);
function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
  let result = worker(arrOfArr[i]);
  if (sum > max) {
    max
  }
  } return max;
};

// Задание 3
function worker2(arr) {
  // Ваш код
}