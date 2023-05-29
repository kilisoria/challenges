function spacey(array) {

    let value = '';
    let endList = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        value += element.trim();
        endList.push(value);
    }

    console.log(endList);
}

spacey(['this', 'cheese', 'has', 'no', 'holes']);