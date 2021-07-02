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
  return { min, max, avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function makeWork(arrOfArr, func) {
  let max = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
  let result = func(arrOfArr[i]);
  if (result > max) {
    max = result;
  }
  } return max;
};

// Задание 3
function worker2(arr) {
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
    diff += arr[i];
  }
  return diff;
}
makeWork(arrOfArr, worker2)