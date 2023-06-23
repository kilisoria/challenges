
const doSetTimeout = (i) => {
    setTimeout(() => {
        console.log(i);
    }, 2000);
}

const counter = () => {
    for (var i = 0; i < 3; i++) {
        doSetTimeout(i);
    }
};

counter();
