console.log(var1);
var var1;

// console.log(var2);
// const var2 = '';

// console.log(var3);
// let var3;

const arrow_fn_test = () => {
    console.log(arguments);
};

function fn_test() {
    console.log(arguments);
};

arrow_fn_test('aws', 'gcp', 'azure');
// fn_test('cristian', 'soria', 'engineer', 43);