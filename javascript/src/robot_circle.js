/**
 * @param {string} instructions
 * @return {boolean}
 */

var isRobotBounded = function(instructions) {
    if (!instructions) {
        throw new Error('Instructions is required!');
    }

    const stepsByInstructions = instructions.split("");
    const stepsByInstructionsLength = stepsByInstructions.length;

    if (stepsByInstructionsLength <= 0 || stepsByInstructionsLength > 100) {
         throw new Error('invalid count of the steps in the instructions.');
    }

    const instructionsMap = {
        n: { L: 'w', R: 'e', G: { x: 0, y: 1 } },
        s: { L: 'e', R: 'w', G: { x: 0, y: -1 } },
        e: { L: 'n', R: 's', G: { x: 1, y: 0 } },
        w: { L: 's', R: 'n', G: { x: -1, y: 0 } },
    };

    const position = { x: 0, y: 0 };
    let direction = 'n';

    for (const instruction of instructions) {
        console.log('instructon', instruction);

        if (instruction === 'G') {
            const { x, y } = instructionsMap[direction].G;
            position.x += x;
            position.y += y;

            continue;
        }

        direction = instructionsMap[direction][instruction];
    }

    return (position.x === 0 && position.y === 0) || direction !== 'n';
};
