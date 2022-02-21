function createSolution() {
    let solution = [];
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            solution.push(Math.floor(Math.random() * 10));
        } else if (i === 1) {
            while (true) {
                let newNum = Math.floor(Math.random() * 10);
                if (newNum !== solution[0]) {
                    solution.push(newNum);
                    break;
                };
            };
        } else {
            while (true) {
                newNum = Math.floor(Math.random() * 10);
                if (newNum !== solution[0] && newNum !== solution[1]) {
                    solution.push(newNum);
                    break;
                };
            };
        };
    };
    return solution;
};

function checkGuess(guess, solution) {
    let hint = [];
    if (guess[0] === solution[0] && guess[1] === solution[1] && guess[2] === solution[2]) {
        hint.push('WINNER');
        return hint;
    };
    for (let i = 0; i < 3; i++) {
        if (guess[i] === solution[i]) {
            hint.push('GREEN');
        };
    };
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i === j) {
                continue;
            } else {
                if (guess[i] === solution[j]) {
                    hint.push('YELLOW');
                };
            };
        };
    };
    if (hint.length === 0) {
        hint.push('RED');
    };
    return hint;
};

export default { createSolution, checkGuess };