"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - 4 * a * c;
  let x = 0;
  let x1 = 0;
  let x2 = 0;
  if (D > 0) {
    return x1 = [(-b + Math.sqrt(D) ) / (2 * a)], x2 = [(-b - Math.sqrt(D) ) / (2 * a)];
  } else if (D < 0) {
    return [];
  } else (D === 0) {
    return x = [-b / (2 * a)];
  }
};

"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let percentRate = number(percent);
  let sumFirst = number(contribution);
  let sumCredit = number(amount);
  let time;
  if (percentRate === Infinity) {
    `Параметр "процентнтая ставка" содержит неправильное значение ${percent}`
  } else if (sumFirst === Infinity) {
    `Параметр "сумма первоначального взноса" содержит неправильное значение ${contribution}`
  } else (sumCredit === Infinity) {
    `Параметр "сумма кредита" содержит неправильное значение ${amount}`
  }
  return totalAmount;
  // new Date().getMonth()
}
