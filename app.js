import { createSolution, checkGuess } from './functions';

const solution = createSolution();

let runGame = true;
while (runGame) {
    const guess = [];
    let input = prompt('Please enter a guess: ');
    if (input.length !== 3) {
        console.log("You may have entered a number that was either too short or too long, please try again!");
        continue;
    };
    if (isNaN(Number(input))) {
        console.log("You may have entered something that was not strictly a number, please try again!");
        continue;
    };
    if (input[0] === input[1] || input[1] === input[2] || input[0] === input[2]) {
        console.log("You may have entered a number that does not contain only unique digits, please try again!");
        continue;
    };
    for (let i = 0; i < 3; i++) {
        guess.push(Number(input[i]));
    };
    const result = checkGuess(guess, solution);
    console.log(result);
    if (result[0] === 'WINNER') {
        break;
    };
};