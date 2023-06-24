/*
const doSetTimeout = (i) => {
    setTimeout(() => {
        console.log(i);
    }, 2000);
}
*/

// Use "let" instead of "var"

const counter = () => {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 2000);
    }
};

counter();
