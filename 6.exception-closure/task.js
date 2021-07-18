// 1 Задание

function parseCount(value) {
    const parsedValue = Number.parseInt(value);
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    return parsedValue;
}
function validateCount(value) {
    try {
        return parseCount(value);
    } catch (errorValid) {
        return errorValid;
    }
}
// 2 Задание

class Triangle {
    constructor(top, left, right) {
        this.top = top;
        this.left = left;
        this.right = right;
        this.errorSum = new Error("Треугольник с такими сторонами не существует");
        if (!this.isValid()) {
            throw this.errorSum;
        }
    }
    isValid() {
        let valid = true;
        if (this.top === undefined ||
            this.left === undefined ||
            this.right === undefined ||
            this.top + this.left < this.right ||
            this.left + this.right < this.top ||
            this.top + this.right < this.left) {
                valid = false;
            }
            return valid;
    }
    getPerimeter() {
        if (!this.isValid()) {
            return "Ошибка! Треугольник не существует"; //
        } else {
            return this.top + this.left + this.right;
        }
    }
    getArea() {
        if (!this.isValid()) {
            return "Ошибка! Треугольник не существует";
        } else {
            let semiPerimeter = this.getPerimeter() / 2;
            let perimeter = 0;
            perimeter += Math.sqrt(semiPerimeter * (semiPerimeter - this.top) * (semiPerimeter - this.left) * (semiPerimeter - this.right));
            return +perimeter.toFixed(3);
        }
    }
}
class FakePerimeter {
    getArea() {
        return "Ошибка! Треугольник не существует";
    }
    getPerimeter() {
        return "Ошибка! Треугольник не существует";
    }
};
function getTriangle(top, left, right) {
    try {
        return new Triangle(top, left, right)
    } catch (error) {
        return new FakePerimeter()
    }
};

