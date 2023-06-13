
function expandedForm(num) {
    const numStr = num.toString();
    const numLength = num.toString().length;
    let expandedValue = '';
    let zeroAmount = '';

    for (let index = 0; index < numLength; index++) {
        zeroAmount = '0'.repeat((numLength - index) - 1);
        expandedValue += `${numStr.at(index)}${zeroAmount} `;
    }

    return expandedValue;
}


/*

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
                            
*/
