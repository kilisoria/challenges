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


function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	this.count++;
}

foo.count = 0;

var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log( foo.count ); // 0 -- WTF?