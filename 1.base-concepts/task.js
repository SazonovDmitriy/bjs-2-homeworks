"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - 4 * a * c;
  let x = -b / (2 * a);
  let x1 = (-b + Math.sqrt(D) ) / (2 * a);
  let x2 = (-b - Math.sqrt(D) ) / (2 * a);
  if (D > 0) {
    arr[0] = x1;
    arr[1] = x2;
    return arr;
  } else if (D < 0) {
    return arr;
  } else if (D === 0) {
    arr[0] = x;
    return arr;
  }
};

"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let percentRate = number(percent);
  let sumFirst = number(contribution);
  let sumCredit = number(amount);
  let time;
  if (percentRate === Number.isNaN()) {
    `Параметр "процентнтая ставка" содержит неправильное значение ${percent}`
  } else if (sumFirst === Number.isNaN()) {
    `Параметр "сумма первоначального взноса" содержит неправильное значение ${contribution}`
  } else if (sumCredit === Number.isNaN()) {
    `Параметр "сумма кредита" содержит неправильное значение ${amount}`
  }
  return totalAmount;
  // new Date().getMonth()
}
