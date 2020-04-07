// Task N1
const parseCount = (val) => {
    const num = Number.parseInt(val, 10);
    if (isNaN(num)) {
        const invalidError = new Error('Невалидное значение');
        throw invalidError
    }
    return num;
}

const validateCount = (amount) => {
    try {
        return parseCount(amount);
    } catch (err) {
        return err;
    }
}

// Task N2
class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c) < b || (c + b) < a) {
            const invalidError = new Error('Треугольник с такими сторонами не существует');
            throw invalidError
        }
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
    }

    getPerimeter() {
        return (this.sideA + this.sideB + this.sideC);
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return +(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))).toFixed(3)
    }
}

let getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        const triangle = {};
        triangle.getArea = function () {
            return 'Ошибка! Неправильный треугольник';
        };
        triangle.getPerimeter = function () {
            return 'Ошибка! Неправильный треугольник';
        }

        return triangle;

    }
}