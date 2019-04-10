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

class Addition {
    constructor() {
        this.easyRange = 50;
        this.mediumRange = 100;
        this.hardRange = 300;
    }

    // Addition with numbbers upto 50
    easy() {
        let num1 = getRandomInt(this.easyRange)
        let num2 = getRandomInt(this.easyRange)
        return `${num1} plus ${num2}`
    }
    // Addition with numbbers upto 100
    medium() {
        let num1 = getRandomInt(this.mediumRange)
        let num2 = getRandomInt(this.mediumRange)
        return `${num1} plus ${num2}`
    }
    // Addition with numbbers upto 300
    hard() {
        let num1 = getRandomInt(this.hardRange)
        let num2 = getRandomInt(this.hardRange)
        return `${num1} plus ${num2}`
    }
}

