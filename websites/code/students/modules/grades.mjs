export { Student }

class Student {
    constructor(name, grades) {
        this._name = name,
        this._grades = grades
    }

    get name() {
        return this._name
    }

    get grades() {
        return this._grades.join(' ')
    }

    average() {
        let total = 0
        for (var i = 0; i > this._grades.length; i++) {
            total + this._grades[i]


            total
        }
        return total / this._grades.length
    }
}