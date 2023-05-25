// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// function mostLikely(prob1,prob2){
//   let [a, b] = prob1.split(':');
//   let [c, d] = prob2.split(':');
  
//   return a/b > c/d;
// }


function expandedForm(num) {
    const numStr = num.toString();
    const numLength = num.toString().length;
    let expandedValue = '';
    let zeroAmount = '';

    for (let index = 0; index < numLength; index++) {
        zeroAmount = '0'.repeat((numLength - index) - 1);
        console.log(zeroAmount)
        expandedValue += `${numStr.at(index)}${zeroAmount} `;
    }

    console.log(expandedValue);
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
