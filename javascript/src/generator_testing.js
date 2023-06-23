function* gen() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}

const iterator = gen();

for (let index = 0; index < 5; index++) {
    console.log(iterator.next());    
}
