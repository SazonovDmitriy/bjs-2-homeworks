// 1 Задание

function parseCount(value) {
    const errorValid = new Error("Невалидное значение");
    const parsedValue = Number.parseInt(value);
    if (isNaN(parsedValue)) {
        throw errorValid
    }
    return parsedValue;
}
function validateCount(value) {
    try {
        const parsedValue = parseCount(value);
        return parsedValue;
    } catch (errorValid) {
        return errorValid;
    }
}
// 2 Задание

class Triangle {
    constructor(top, left, right) {
        const errorSum = new Error("Треугольник с такими сторонами не существует");
        if (top + left < right || top + right < left || right + left < top) {
        throw errorSum;
        }
    }
        getPerimetr() {
            return errorSum;
            }
        getArea() {
            const p = (0.5 * (top + left + right));
            return Math.sqrt(p(p - top)(p - left)(p - right));
        }
}
function getTriangle(top, left, right) {
    try {
        return triangle = new Triangle(top, left, right);
    } catch (Triangle) {
        return Triangle
    }
}