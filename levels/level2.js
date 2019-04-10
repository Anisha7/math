function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// PSEUDOCODE: 
    // Create a class
        // easy function --> hard functions (numbers are larger)
            // generate 2 random numbers in range
            // format them in a string
            // return the formatted string
            // store the answer

class Subtraction {
    constructor() {
        this.easyRange = 50;
        this.mediumRange = 100;
        this.hardRange = 300;
    }

    // Subtraction with only positive results
    easy() {
        let num2 = getRandomInt(this.easyRange)
        let num1 = num2 + getRandomInt(this.easyRange)
        return `${num1} minus ${num2}`
    }
    // Subtraction with numbers upto 100, and negative results
    medium() {
        let num1 = getRandomInt(this.mediumRange)
        let num2 = getRandomInt(this.mediumRange)
        return `${num1} minus ${num2}`
    }
    // Addition with numbers upto 300, and negative results
    hard() {
        let num1 = getRandomInt(this.hardRange)
        let num2 = getRandomInt(this.hardRange)
        return `${num1} minus ${num2}`
    }
}

